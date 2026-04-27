"use client";

import { useState, useRef, useEffect } from "react";
import { useBuilderStore } from "@/stores/builder-store";
import { Send, Loader2, FileCode2, Sparkles } from "lucide-react";

const SUGGESTED_PROMPTS = [
  "Build a SaaS landing page with pricing tiers and testimonials",
  "Create a crypto trading dashboard with live charts",
  "Make an e-commerce store for sneakers with a cart",
  "Build a portfolio website for a photographer",
  "Create a restaurant website with menu and reservations",
  "Build a fitness app dashboard with workout tracking",
];

export default function ChatPanel() {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const messages = useBuilderStore((s) => s.messages);
  const isGenerating = useBuilderStore((s) => s.isGenerating);
  const streamingText = useBuilderStore((s) => s.streamingText);
  const sendMessage = useBuilderStore((s) => s.sendMessage);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isGenerating) return;
    setInput("");
    sendMessage(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (prompt: string) => {
    sendMessage(prompt);
  };

  // Clean streaming text (remove file blocks for display)
  const displayStreamText = streamingText
    .replace(/<boltFile[\s\S]*?<\/boltFile>/g, "")
    .trim();

  const isEmpty = messages.length === 0 && !isGenerating;

  return (
    <div className="flex flex-col h-full bg-zinc-950 border-r border-zinc-800">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
        <Sparkles className="w-4 h-4 text-violet-400" />
        <span className="text-sm font-medium text-zinc-200">Chat</span>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {isEmpty && (
          <div className="flex flex-col items-center justify-center h-full gap-6 px-2">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-zinc-200 mb-1">
                What do you want to build?
              </h3>
              <p className="text-sm text-zinc-500">
                Describe your app and I&apos;ll generate it instantly
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 w-full max-w-sm">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSuggestion(prompt)}
                  className="text-left px-3 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-violet-600 text-white"
                  : "bg-zinc-900 text-zinc-200 border border-zinc-800"
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.content}</p>
              {/* File change badges */}
              {msg.file_changes && msg.file_changes.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-zinc-700">
                  {msg.file_changes.map((fc) => (
                    <span
                      key={fc.path}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-800 text-xs text-zinc-400"
                    >
                      <FileCode2 className="w-3 h-3" />
                      {fc.path.split("/").pop()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Streaming assistant message */}
        {isGenerating && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-xl px-4 py-2.5 text-sm bg-zinc-900 text-zinc-200 border border-zinc-800">
              {displayStreamText ? (
                <p className="whitespace-pre-wrap">{displayStreamText}</p>
              ) : (
                <div className="flex items-center gap-2 text-zinc-500">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating your app...</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 border-t border-zinc-800">
        <div className="flex items-end gap-2 bg-zinc-900 rounded-xl border border-zinc-800 p-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe what you want to build..."
            rows={1}
            className="flex-1 bg-transparent text-sm text-zinc-200 placeholder:text-zinc-600 resize-none outline-none px-2 py-1.5 max-h-[120px]"
            disabled={isGenerating}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isGenerating}
            className="flex-shrink-0 p-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
