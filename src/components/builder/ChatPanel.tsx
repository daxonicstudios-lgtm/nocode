"use client";

import { useState, useRef, useEffect } from "react";
import { useBuilderStore } from "@/stores/builder-store";
import { Send, Loader2, FileCode2, Sparkles, Paperclip, Mic, MicOff, X, ImageIcon } from "lucide-react";

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
  const [attachedImage, setAttachedImage] = useState<string | null>(null); // base64
  const [attachedImageName, setAttachedImageName] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const messages = useBuilderStore((s) => s.messages);
  const isGenerating = useBuilderStore((s) => s.isGenerating);
  const streamingText = useBuilderStore((s) => s.streamingText);
  const sendMessage = useBuilderStore((s) => s.sendMessage);
  const promptQueue = useBuilderStore((s) => s.promptQueue);
  const queuePrompt = useBuilderStore((s) => s.queuePrompt);
  const removeFromQueue = useBuilderStore((s) => s.removeFromQueue);
  const setActiveFile = useBuilderStore((s) => s.setActiveFile);
  const showCodePanel = useBuilderStore((s) => s.showCodePanel);
  const toggleCodePanel = useBuilderStore((s) => s.toggleCodePanel);

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
    if (!trimmed && !attachedImage) return;

    const message = attachedImage
      ? `${trimmed || "Recreate this design as a React app"}\n\n[IMAGE:${attachedImage}]`
      : trimmed;

    setInput("");
    setAttachedImage(null);
    setAttachedImageName(null);

    if (isGenerating) {
      queuePrompt(message);
    } else {
      sendMessage(message);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    if (file.size > 10 * 1024 * 1024) return; // 10MB max

    const reader = new FileReader();
    reader.onload = () => {
      setAttachedImage(reader.result as string);
      setAttachedImageName(file.name);
    };
    reader.readAsDataURL(file);
    // Reset input so same file can be re-selected
    e.target.value = "";
  };

  const toggleVoice = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      return; // Not supported
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setIsListening(false);
      return;
    }

    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev: string) => prev + (prev ? " " : "") + transcript);
      setIsListening(false);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
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
                    <button
                      key={fc.path}
                      onClick={() => {
                        setActiveFile(fc.path);
                        if (!showCodePanel) toggleCodePanel();
                      }}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-800 text-xs text-zinc-400 hover:bg-violet-600/20 hover:text-violet-300 transition-colors cursor-pointer"
                      title={fc.path}
                    >
                      <FileCode2 className="w-3 h-3" />
                      {fc.path.split("/").pop()}
                    </button>
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

      {/* Prompt queue */}
      {promptQueue.length > 0 && (
        <div className="px-3 py-2 border-t border-zinc-800 space-y-1">
          <span className="text-[10px] uppercase tracking-wide text-zinc-600 font-medium">
            Queued ({promptQueue.length})
          </span>
          {promptQueue.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-zinc-900 border border-zinc-800"
            >
              <span className="text-xs text-zinc-400 truncate flex-1">
                {p}
              </span>
              <button
                onClick={() => removeFromQueue(i)}
                className="text-zinc-600 hover:text-zinc-400 text-xs"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input area */}
      <div className="p-3 border-t border-zinc-800">
        {/* Attached image preview */}
        {attachedImage && (
          <div className="flex items-center gap-2 mb-2 px-2 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <ImageIcon className="w-4 h-4 text-violet-400 flex-shrink-0" />
            <span className="text-xs text-zinc-400 truncate flex-1">
              {attachedImageName}
            </span>
            <button
              onClick={() => {
                setAttachedImage(null);
                setAttachedImageName(null);
              }}
              className="text-zinc-600 hover:text-zinc-400"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="flex items-end gap-2 bg-zinc-900 rounded-xl border border-zinc-800 p-2">
          {/* Image upload */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-shrink-0 p-2 rounded-lg text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800 transition-colors"
            title="Upload screenshot or design"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          {/* Voice input */}
          <button
            onClick={toggleVoice}
            className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
              isListening
                ? "text-red-400 bg-red-500/10"
                : "text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800"
            }`}
            title={isListening ? "Stop listening" : "Voice input"}
          >
            {isListening ? (
              <MicOff className="w-4 h-4" />
            ) : (
              <Mic className="w-4 h-4" />
            )}
          </button>

          {/* Text input */}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              isListening
                ? "Listening..."
                : attachedImage
                  ? "Describe what to do with this design..."
                  : "Describe what you want to build..."
            }
            rows={1}
            className="flex-1 bg-transparent text-sm text-zinc-200 placeholder:text-zinc-600 resize-none outline-none px-1 py-1.5 max-h-[120px]"
          />

          {/* Send */}
          <button
            onClick={handleSend}
            disabled={!input.trim() && !attachedImage}
            className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
