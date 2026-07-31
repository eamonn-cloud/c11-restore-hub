import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

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

const SUGGESTIONS = [
  "What does P01 mean?",
  "How do I change the filter?",
  "What chemicals can I use?",
  "Kinos vs Kinos Plus specs",
];

export function AskC11() {
  const [open, setOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => textareaRef.current?.focus(), 60);
    return () => window.clearTimeout(id);
  }, [open, status]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    void sendMessage({ text: trimmed });
  };

  const handleSubmit = (message: PromptInputMessage, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = message.text ?? "";
    if (!text.trim() || busy) return;
    send(text);
    event.currentTarget.reset();
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
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
          ref={panelRef}
          role="dialog"
          aria-label="Ask C11 support assistant"
          className="fixed z-[60] inset-0 sm:inset-auto sm:bottom-5 sm:right-5 sm:h-[min(640px,calc(100vh-3rem))] sm:w-[420px] flex flex-col border border-obsidian bg-stone-base rounded-[2px] overflow-hidden"
        >
          <header className="flex items-center justify-between gap-4 bg-obsidian px-4 py-3 text-stone-base">
            <div className="flex items-center gap-2">
              <span className="text-sm leading-none">✳</span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Ask C11</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="text-stone-base/70 hover:text-stone-base transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <Conversation className="flex-1 bg-stone-base">
            <ConversationContent className="px-4 py-5">
              {messages.length === 0 && (
                <div className="space-y-5">
                  <p className="font-editorial text-lg leading-snug text-obsidian">
                    ✳ Ask about setup, error codes, chemistry or maintenance.
                  </p>
                  <p className="text-xs leading-relaxed text-obsidian/60">
                    Answers come from the C11 manuals and engineering reference for Kinos, Kinos
                    Plus, Hanki and Kuura.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
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
        </div>
      )}
    </>
  );
}
