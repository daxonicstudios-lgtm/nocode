import type { BlockProps } from "@/blocks/types";
import { Command, Keyboard } from "lucide-react";

export default function Features344(props: BlockProps) {
  const {
    theme,
    heading = "Keyboard Shortcuts",
    subheading = "Power-user features at your fingertips",
    items = [
      { title: "Quick Search", description: "Find anything across your workspace instantly.", label: "Ctrl + K" },
      { title: "New Project", description: "Start a fresh project without leaving the editor.", label: "Ctrl + N" },
      { title: "Save Draft", description: "Save your work-in-progress to continue later.", label: "Ctrl + S" },
      { title: "Undo Action", description: "Reverse the last change with full history support.", label: "Ctrl + Z" },
      { title: "Command Palette", description: "Access every feature from one unified command bar.", label: "Ctrl + Shift + P" },
      { title: "Preview Mode", description: "Toggle between edit and preview without leaving the page.", label: "Ctrl + Shift + V" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Keyboard size={24} style={{ color: primary }} />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        </div>
        <p className="opacity-70 text-center mb-10">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl border" style={{ borderColor: `${primary}12` }}>
              <div className="flex-1 mr-3">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs opacity-40">{item.description}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {(item.label || "").split(" + ").map((key, j) => (
                  <span key={j}>
                    {j > 0 && <span className="text-xs opacity-30 mx-0.5">+</span>}
                    <kbd className="inline-block px-2 py-1 rounded text-xs font-mono font-bold border" style={{ borderColor: `${primary}20`, backgroundColor: `${primary}06` }}>
                      {key === "Ctrl" ? <><Command size={10} className="inline -mt-0.5" /> </> : null}{key}
                    </kbd>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
