import { C11_KNOWLEDGE } from "@/lib/c11-knowledge";

// The corpus is ~110k characters. Sending all of it on every question is slow and
// expensive, so we split it into sections and only ship the ones relevant to the
// current question (plus the always-on site/support facts).

type Section = {
  title: string;
  body: string;
  tokens: Set<string>;
};

const STOP_WORDS = new Set([
  "the", "and", "for", "with", "that", "this", "from", "have", "has", "does", "did",
  "how", "what", "why", "when", "where", "which", "who", "can", "could", "should",
  "would", "your", "you", "our", "are", "was", "were", "will", "not", "but", "its",
  "it's", "get", "got", "any", "all", "out", "off", "into", "onto", "about", "there",
  "then", "than", "them", "they", "his", "her", "she", "him", "one", "two", "use",
  "using", "used", "need", "needs", "please", "help", "hi", "hey", "hello",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

function splitSections(raw: string): Section[] {
  const parts = raw.split(/\n(?=={3,}\s)/g);
  return parts
    .map((part) => part.trim())
    .filter(Boolean)
    .flatMap((part) => {
      const title = part.split("\n", 1)[0] ?? "";
      // Break very large documents into smaller chunks so retrieval stays precise.
      const chunks: string[] = [];
      const lines = part.split("\n");
      let current: string[] = [];
      for (const line of lines) {
        current.push(line);
        if (current.join("\n").length > 4000) {
          chunks.push(current.join("\n"));
          current = [];
        }
      }
      if (current.length) chunks.push(current.join("\n"));
      return chunks.map((body) => ({
        title,
        body: body.startsWith(title) ? body : `${title}\n${body}`,
        tokens: new Set(tokenize(`${title}\n${body}`)),
      }));
    });
}

const ALL_SECTIONS = splitSections(C11_KNOWLEDGE);
// The first section holds site facts, contact details and FAQ - always include it.
const BASE_SECTIONS = ALL_SECTIONS.filter((section) =>
  section.title.includes("SITE & SUPPORT FACTS"),
);
const SEARCHABLE = ALL_SECTIONS.filter((section) => !BASE_SECTIONS.includes(section));

const MAX_CHARS = 30000;

export function selectKnowledge(query: string): string {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) {
    return BASE_SECTIONS.map((section) => section.body).join("\n\n");
  }

  const scored = SEARCHABLE.map((section) => {
    let score = 0;
    for (const token of queryTokens) {
      if (section.tokens.has(token)) score += 1;
      // Error codes such as p01 / e07 are high signal.
      if (/^[pe]\d{1,2}$/.test(token) && section.body.toLowerCase().includes(token)) {
        score += 6;
      }
    }
    return { section, score };
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const selected = [...BASE_SECTIONS.map((s) => s.body)];
  let size = selected.join("\n\n").length;

  for (const entry of scored) {
    if (size + entry.section.body.length > MAX_CHARS) continue;
    selected.push(entry.section.body);
    size += entry.section.body.length + 2;
  }

  return selected.join("\n\n");
}
