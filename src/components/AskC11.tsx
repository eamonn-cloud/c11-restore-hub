import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";

type ModelId = "kinos" | "kinos-plus" | "hanki" | "kuura";

const MODELS: { id: ModelId; label: string }[] = [
  { id: "kinos", label: "Kinos" },
  { id: "kinos-plus", label: "Kinos Plus" },
  { id: "hanki", label: "Hanki" },
  { id: "kuura", label: "Kuura" },
];

const SUGGESTIONS_BY_MODEL: Record<ModelId, string[]> = {
  kinos: [
    "What does P01 mean?",
    "How do I change the filter?",
    "Can I use salt in my Kinos?",
  ],
  "kinos-plus": [
    "How do I connect the Wi-Fi controller?",
    "What does E04 mean?",
    "How often should I change the water?",
  ],
  hanki: [
    "How do I install the CHU chiller?",
    "What does P01 mean?",
    "How do I bleed the air from the pump?",
  ],
  kuura: [
    "How do I set up the Wi-Fi controller?",
    "What are the Kuura specs?",
    "How do I winterise my Kuura?",
  ],
};

const GENERIC_SUGGESTIONS = [
  "What does P01 mean?",
  "How do I change the filter?",
  "What chemicals can I use?",
  "Kinos vs Kinos Plus specs",
];

export function AskC11() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState<ModelId | null>(null);
  const [showModelPicker, setShowModelPicker] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  const suggestions = model ? SUGGESTIONS_BY_MODEL[model] : GENERIC_SUGGESTIONS;

  useEffect(() => {
    if (!open) return;
    // Focus textarea when chat opens (after model selection if needed).
    if (model && !showModelPicker) {
      const id = window.setTimeout(() => textareaRef.current?.focus(), 60);
      return () => window.clearTimeout(id);
    }
  }, [open, status, model, showModelPicker]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showModelPicker) {
          setShowModelPicker(false);
        } else {
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, showModelPicker]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    void sendMessage({ text: trimmed }, { body: { model: model ?? undefined } });
  };

  const handleSubmit = (message: PromptInputMessage, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = message.text ?? "";
    if (!text.trim() || busy) return;
    send(text);
    event.currentTarget.reset();
  };

  const handleSelectModel = (id: ModelId) => {
    setModel(id);
    setShowModelPicker(false);
    setTimeout(() => textareaRef.current?.focus(), 80);
  };

  const modelLabel = model ? MODELS.find((m) => m.id === model)?.label : null;

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            // Show model picker on first open if no model selected.
            if (!model) setShowModelPicker(true);
          }}
          aria-label="Ask C11 - support assistant"
          className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 border border-obsidian bg-obsidian px-4 py-3 text-stone-base rounded-[2px] transition-colors hover:bg-deep-current hover:border-deep-current"
        >
          <span className="text-base leading-none">✳</span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.18em] font-medium">
            Ask C11
          </span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Ask C11 support assistant"
          className="fixed z-[60] inset-0 sm:inset-auto sm:bottom-5 sm:right-5 sm:h-[min(640px,calc(100vh-3rem))] sm:w-[420px] flex flex-col border border-obsidian bg-stone-base rounded-[2px] overflow-hidden"
        >
          {/* Header */}
          <header className="flex items-center justify-between gap-4 bg-obsidian px-4 py-3 text-stone-base">
            <div className="flex items-center gap-2">
              <span className="text-sm leading-none">✳</span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Ask C11</span>
              {modelLabel && (
                <span className="ml-1 border border-stone-base/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] rounded-[2px] text-stone-base/80">
                  {modelLabel}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {model && (
                <button
                  type="button"
                  onClick={() => setShowModelPicker(true)}
                  className="text-[10px] uppercase tracking-[0.12em] text-stone-base/60 hover:text-stone-base transition-colors"
                >
                  Change model
                </button>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="text-stone-base/70 hover:text-stone-base transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </header>

          {/* Model picker overlay */}
          {showModelPicker && (
            <div className="flex-1 flex flex-col justify-center px-6 py-8 bg-stone-base">
              <p className="font-editorial text-lg leading-snug text-obsidian mb-1">
                Which model do you have?
              </p>
              <p className="text-xs leading-relaxed text-obsidian/60 mb-6">
                This helps us give you the right specs, error codes and instructions for your
                unit.
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleSelectModel(m.id)}
                    className={`flex items-center justify-between gap-2 border px-4 py-3 rounded-[2px] text-sm transition-colors ${
                      model === m.id
                        ? "border-obsidian bg-obsidian text-stone-base"
                        : "border-obsidian/25 text-obsidian hover:border-obsidian hover:bg-obsidian/5"
                    }`}
                  >
                    <span className="font-medium">{m.label}</span>
                    {model === m.id && <Check className="h-3.5 w-3.5" />}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setModel(null);
                  setShowModelPicker(false);
                  setTimeout(() => textareaRef.current?.focus(), 80);
                }}
                className="mt-4 text-[11px] uppercase tracking-[0.12em] text-obsidian/45 hover:text-obsidian transition-colors text-center"
              >
                Skip - show answers for all models
              </button>
            </div>
          )}

          {/* Conversation */}
          {!showModelPicker && (
            <>
              <Conversation className="flex-1 bg-stone-base">
                <ConversationContent className="px-4 py-5">
                  {messages.length === 0 && (
                    <div className="space-y-5">
                      <p className="font-editorial text-lg leading-snug text-obsidian">
                        ✳ Ask about setup, error codes, chemistry or maintenance.
                      </p>
                      <p className="text-xs leading-relaxed text-obsidian/60">
                        Answers come from the C11 manuals and engineering reference
                        {model ? ` for the ${modelLabel}` : " for Kinos, Kinos Plus, Hanki and Kuura"}.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {suggestions.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => send(s)}
                            className="border border-obsidian/30 px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] rounded-[2px] text-obsidian hover:border-obsidian hover:bg-obsidian hover:text-stone-base transition-colors"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {messages.map((message) => {
                    const text = message.parts
                      .map((part) => (part.type === "text" ? part.text : ""))
                      .join("");
                    if (!text) return null;
                    return (
                      <Message from={message.role} key={message.id}>
                        <MessageContent
                          className={
                            message.role === "user"
                              ? "group-[.is-user]:bg-obsidian group-[.is-user]:text-stone-base group-[.is-user]:rounded-[2px] group-[.is-user]:px-3 group-[.is-user]:py-2 text-sm"
                              : "bg-transparent p-0 text-sm text-obsidian"
                          }
                        >
                          {message.role === "assistant" ? (
                            <MessageResponse className="[&_a]:text-deep-current [&_a]:underline">
                              {text}
                            </MessageResponse>
                          ) : (
                            text
                          )}
                        </MessageContent>
                      </Message>
                    );
                  })}

                  {status === "submitted" && (
                    <Shimmer className="text-sm text-obsidian/70">Thinking...</Shimmer>
                  )}

                  {error && (
                    <p className="text-xs text-deep-current">
                      Something went wrong. Try again, or email service@c11recovery.com.
                    </p>
                  )}
                </ConversationContent>
                <ConversationScrollButton />
              </Conversation>

              <div className="border-t border-obsidian/15 bg-stone-base p-3">
                <PromptInput onSubmit={handleSubmit} className="rounded-[2px] border-obsidian/30">
                  <PromptInputTextarea
                    ref={textareaRef}
                    placeholder="Ask about your ice bath..."
                    className="min-h-14 text-sm"
                  />
                  <PromptInputFooter className="justify-end">
                    <PromptInputSubmit status={status} disabled={busy} />
                  </PromptInputFooter>
                </PromptInput>
                <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-obsidian/45">
                  AI assistant - for warranty or repairs contact service@c11recovery.com
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
