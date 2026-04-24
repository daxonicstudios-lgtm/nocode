import type { BlockProps } from "@/blocks/types";
import { Upload, Cloud } from "lucide-react";

export default function Cta227(props: BlockProps) {
  const {
    theme,
    heading = "Upload your files securely",
    subheading = "Drag and drop or click to upload. Supports all major file formats.",
    buttonText = "Choose Files",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
        </div>
        <div className="border-2 border-dashed rounded-2xl p-10 text-center" style={{ borderColor: theme?.primary ?? "#6366f1" }}>
          <Cloud className="w-12 h-12 mx-auto mb-4 opacity-40" />
          <p className="text-sm opacity-60 mb-4">Drag files here or click below</p>
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            <Upload className="w-4 h-4" /> {buttonText}
          </a>
          <p className="mt-3 text-xs opacity-40">Max file size: 50MB</p>
        </div>
      </div>
    </section>
  );
}
