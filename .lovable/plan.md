## Ask C11 — AI support assistant

A floating chat bubble on every page, answering customer questions from the site content and the uploaded PDF manuals. No login, no database, no saved history — a fresh conversation each visit.

### 1. Knowledge base

Build a single server-side knowledge file, `src/lib/c11-knowledge.ts`, exporting one plain-text corpus. Content compiled from:

- **Existing site content** — engineering reference (`/manual`): comparative specs for Kinos, Kinos Plus, Hanki, Kuura; operational rules (no salts/oils, no manual ice); safety and clearances; winter/outdoor use; controller guide; full E-code / P-code error matrix; P01 flow-fault procedures; maintenance. Plus the homepage FAQ, model resource links, filter link, and contact details.
- **Uploaded PDFs** — I extract the text from the seven uploaded documents (CHU manual, CHU Wi-Fi manual, Kinos manual, Kinos Plus manual, Kuura manual, Kinos + Kinos Plus one-pagers, Kinos Problems & Solutions) and fold the useful support content into the same corpus at build time. The PDFs are baked into the text file, so there is no vector database, no embeddings, and no runtime PDF fetching.

Because the corpus fits comfortably in a modern model's context, the whole thing is sent as system context on every request. That is simpler and more accurate than retrieval for a knowledge base this size.

### 2. Server route

`src/routes/api/chat.ts` — a TanStack server route streaming from Lovable AI (`openai/gpt-5.6-sol`) via the AI SDK. The system prompt:

- Injects the full knowledge corpus.
- Sets the C11 voice: confident, minimal, performance-led; no em dashes.
- Instructs it to answer only from the corpus, cite the model name when specs differ, and link to `/manual#p01`-style anchors, `/videos`, or the relevant PDF when useful.
- Falls back to: "I don't have that in the documentation - contact service@c11recovery.com or WhatsApp +353 85 142 6203" rather than guessing.
- Refuses unsafe advice (electrical work, opening the chiller) and routes those to support.

`LOVABLE_API_KEY` stays server-side. 429 / 402 gateway errors surface as a readable message in the chat.

### 3. Chat UI

Install AI Elements (`conversation`, `message`, `prompt-input`, `shimmer`) and compose:

- `src/components/AskC11.tsx` — floating launcher in the bottom-right corner: Obsidian circle with the ✳ mark, 2px radius, no shadow, "Ask C11" label on desktop.
- Opens a panel (bottom-right card on desktop, full-screen sheet on mobile) in the brand system: Stone Base surface, 1px Obsidian border, Obsidian header bar with Stone Base text, EB Garamond intro line.
- Empty state: "✳ Ask about setup, error codes, chemistry or maintenance." plus four suggestion chips — "What does P01 mean?", "How do I change the filter?", "What chemicals can I use?", "Kinos vs Kinos Plus specs".
- Assistant messages render as plain markdown on the surface (no bubble); user messages get an Obsidian bubble with Stone Base text.
- "Thinking..." shimmer while streaming; composer stays focused.
- Small footer line: "AI assistant - for warranty or repairs contact service@c11recovery.com".

Mounted once in `src/routes/__root.tsx` so it appears on Aftercare, Videos and Manual.

### 4. Non-goals

- No conversation storage, accounts, or Lovable Cloud.
- No embeddings/vector search.
- No changes to existing page content or links.

### Technical notes

- `bun add ai @ai-sdk/react @ai-sdk/openai-compatible`
- Gateway provider helper in `src/lib/ai-gateway.server.ts` per the Lovable AI Gateway pattern; `reasoningEffort: "none"` set for GPT-5.6.
- Rendering via `message.parts`, streamed with `toUIMessageStreamResponse`.
- Knowledge corpus is a static string, so it ships with the Worker bundle - no runtime fetches.
