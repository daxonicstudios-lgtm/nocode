import type { BlockProps } from "@/blocks/types";
import { Terminal, GitBranch, BookOpen } from "lucide-react";

const codeEditorKeyframes = `
@keyframes typeLine204_1 {
  0%, 5% { width: 0 }
  25% { width: 100% }
  100% { width: 100% }
}
@keyframes typeLine204_2 {
  0%, 25% { width: 0; opacity: 0 }
  26% { opacity: 1; width: 0 }
  50% { width: 100% }
  100% { width: 100% }
}
@keyframes typeLine204_3 {
  0%, 50% { width: 0; opacity: 0 }
  51% { opacity: 1; width: 0 }
  75% { width: 100% }
  100% { width: 100% }
}
@keyframes typeLine204_4 {
  0%, 75% { width: 0; opacity: 0 }
  76% { opacity: 1; width: 0 }
  100% { width: 100% }
}
@keyframes editorCursor204 {
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
}
@keyframes slideUp204 {
  from { opacity: 0; transform: translateY(40px) }
  to { opacity: 1; transform: translateY(0) }
}
`;

export default function Hero204(props: BlockProps) {
  const {
    theme,
    heading = "Code at the speed of thought",
    subheading = "The developer platform that understands your workflow. Build, test, and deploy — all in one place.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    secondaryButtonText = "Read Docs",
    secondaryButtonUrl = "#",
  } = props;

  const codeLines = [
    { num: 1, prefix: "const ", keyword: "app", op: " = ", func: "createApp", args: "({" },
    { num: 2, prefix: "  framework: ", value: '"next"', comma: "," },
    { num: 3, prefix: "  deploy: ", value: '"instant"', comma: "," },
    { num: 4, prefix: "}).", func: "launch", args: "()", end: ";" },
  ];

  const lineAnims = [
    "typeLine204_1 4s steps(30) forwards",
    "typeLine204_2 4s steps(25) forwards",
    "typeLine204_3 4s steps(25) forwards",
    "typeLine204_4 4s steps(20) forwards",
  ];

  return (
    <section
      className="min-h-screen flex items-center px-4 py-20"
      style={{
        backgroundColor: theme?.background ?? "#0d1117",
        color: theme?.foreground ?? "#e6edf3",
      }}
    >
      <style>{codeEditorKeyframes}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <div style={{ animation: "slideUp204 0.7s ease-out both" }}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono mb-6"
              style={{
                backgroundColor: "rgba(56,189,248,0.1)",
                color: theme?.accent ?? "#38bdf8",
              }}
            >
              <Terminal className="w-3.5 h-3.5" />
              v2.0 — Now Available
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-mono">
              {heading}
            </h1>
            <p className="text-base sm:text-lg opacity-60 mb-8 leading-relaxed max-w-lg">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#238636",
                  color: "#ffffff",
                }}
              >
                <GitBranch className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border transition-opacity hover:opacity-100 opacity-70"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <BookOpen className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right — code editor */}
          <div
            className="rounded-xl overflow-hidden border"
            style={{
              backgroundColor: "#161b22",
              borderColor: "rgba(255,255,255,0.1)",
              animation: "slideUp204 0.7s ease-out 0.3s both",
            }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
              </div>
              <span className="text-xs font-mono opacity-40 ml-2">app.ts</span>
            </div>
            {/* Code area */}
            <div className="p-6 font-mono text-sm sm:text-base leading-loose">
              {codeLines.map((line, i) => (
                <div key={i} className="flex items-center">
                  <span className="w-8 text-right mr-4 opacity-30 text-xs select-none">{line.num}</span>
                  <div className="overflow-hidden whitespace-nowrap" style={{ animation: lineAnims[i] ?? lineAnims[0], width: 0, opacity: i === 0 ? 1 : 0 }}>
                    {line.prefix && <span style={{ color: "#79c0ff" }}>{line.prefix}</span>}
                    {line.keyword && <span style={{ color: "#d2a8ff" }}>{line.keyword}</span>}
                    {line.op && <span style={{ color: "#e6edf3" }}>{line.op}</span>}
                    {line.func && <span style={{ color: "#d2a8ff" }}>{line.func}</span>}
                    {line.args && <span style={{ color: "#e6edf3" }}>{line.args}</span>}
                    {line.value && <span style={{ color: "#a5d6ff" }}>{line.value}</span>}
                    {line.comma && <span style={{ color: "#e6edf3" }}>{line.comma}</span>}
                    {line.end && <span style={{ color: "#e6edf3" }}>{line.end}</span>}
                  </div>
                </div>
              ))}
              {/* Blinking cursor on last line */}
              <div className="flex items-center mt-1">
                <span className="w-8 text-right mr-4 opacity-30 text-xs select-none">5</span>
                <span
                  className="inline-block w-2 h-5"
                  style={{
                    backgroundColor: theme?.accent ?? "#38bdf8",
                    animation: "editorCursor204 1s step-end infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
