import type { BlockProps } from "@/blocks/types";
import { FileJson, FileImage, FileSpreadsheet, FileVideo, FileArchive, FileCode2 } from "lucide-react";

const fileTypes = [
  { icon: FileJson, ext: "JSON", color: "#f59e0b" },
  { icon: FileImage, ext: "PNG", color: "#22c55e" },
  { icon: FileSpreadsheet, ext: "CSV", color: "#3b82f6" },
  { icon: FileVideo, ext: "MP4", color: "#ef4444" },
  { icon: FileArchive, ext: "ZIP", color: "#8b5cf6" },
  { icon: FileCode2, ext: "HTML", color: "#ec4899" },
];

export default function Features346(props: BlockProps) {
  const {
    theme,
    heading = "Supported File Types",
    subheading = "Import and export in every format you need",
    items = [
      { title: "Data Import", description: "Import structured data from JSON, XML, and API endpoints." },
      { title: "Image Processing", description: "Auto-resize, compress, and convert images on upload." },
      { title: "Spreadsheet Export", description: "Export reports as CSV, XLSX, or Google Sheets." },
      { title: "Video Embedding", description: "Host and stream video content with adaptive bitrate." },
      { title: "Bulk Archives", description: "Download entire projects as compressed ZIP archives." },
      { title: "Code Export", description: "Export clean HTML, CSS, and JavaScript for any page." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const ft = fileTypes[i % fileTypes.length];
            const Icon = ft.icon;
            return (
              <div key={i} className="rounded-xl p-5 text-left border" style={{ borderColor: `${ft.color}20` }}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={20} style={{ color: ft.color }} />
                  <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: `${ft.color}12`, color: ft.color }}>.{ft.ext}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
