"use client";

import {
  SandpackProvider,
  SandpackPreview,
  SandpackLayout,
} from "@codesandbox/sandpack-react";
import { useBuilderStore } from "@/stores/builder-store";
import { Monitor, Tablet, Smartphone, RefreshCw } from "lucide-react";
import type { DeviceFrame } from "@/types/builder";
import { useState, useMemo } from "react";

const DEVICE_WIDTHS: Record<DeviceFrame, string> = {
  mobile: "375px",
  tablet: "768px",
  desktop: "100%",
};

export default function PreviewPanel() {
  const files = useBuilderStore((s) => s.files);
  const deviceFrame = useBuilderStore((s) => s.deviceFrame);
  const setDeviceFrame = useBuilderStore((s) => s.setDeviceFrame);
  const [refreshKey, setRefreshKey] = useState(0);

  // Convert our files to Sandpack format
  const sandpackFiles = useMemo(() => {
    const spFiles: Record<string, string> = {};

    for (const [path, content] of Object.entries(files)) {
      // Sandpack expects paths starting with /
      spFiles[`/${path}`] = content;
    }

    // Ensure there's always an App.tsx
    if (!spFiles["/src/App.tsx"] && !spFiles["/App.tsx"]) {
      spFiles["/src/App.tsx"] = `export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Your app will appear here</h1>
        <p className="text-zinc-400">Send a message to start building</p>
      </div>
    </div>
  );
}`;
    }

    return spFiles;
  }, [files]);

  const hasFiles = Object.keys(files).length > 0;

  return (
    <div className="flex flex-col h-full bg-zinc-950">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
        <span className="text-sm font-medium text-zinc-400">Preview</span>
        <div className="flex items-center gap-1">
          {/* Device frame switcher */}
          {(
            [
              { frame: "mobile" as DeviceFrame, icon: Smartphone },
              { frame: "tablet" as DeviceFrame, icon: Tablet },
              { frame: "desktop" as DeviceFrame, icon: Monitor },
            ] as const
          ).map(({ frame, icon: Icon }) => (
            <button
              key={frame}
              onClick={() => setDeviceFrame(frame)}
              className={`p-1.5 rounded-md transition-colors ${
                deviceFrame === frame
                  ? "bg-zinc-800 text-zinc-200"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
              title={frame}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
          <div className="w-px h-4 bg-zinc-800 mx-1" />
          <button
            onClick={() => setRefreshKey((k) => k + 1)}
            className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-400 transition-colors"
            title="Refresh preview"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preview */}
      <div className="flex-1 flex items-start justify-center overflow-auto bg-zinc-900/50 p-4">
        <div
          className="bg-white rounded-lg overflow-hidden shadow-2xl transition-all duration-300"
          style={{
            width: DEVICE_WIDTHS[deviceFrame],
            maxWidth: "100%",
            height: deviceFrame === "desktop" ? "100%" : "auto",
            minHeight: deviceFrame === "mobile" ? "667px" : deviceFrame === "tablet" ? "600px" : "100%",
          }}
        >
          <SandpackProvider
            key={refreshKey}
            template="react-ts"
            files={sandpackFiles}
            customSetup={{
              dependencies: {
                "lucide-react": "latest",
                "date-fns": "latest",
                "recharts": "latest",
                "react-router-dom": "latest",
              },
            }}
            options={{
              externalResources: [
                "https://cdn.tailwindcss.com",
              ],
              autorun: true,
              autoReload: true,
            }}
            theme="dark"
          >
            <SandpackLayout style={{ border: "none", borderRadius: 0 }}>
              <SandpackPreview
                showNavigator={false}
                showRefreshButton={false}
                style={{
                  height: deviceFrame === "desktop" ? "calc(100vh - 120px)" : deviceFrame === "tablet" ? "600px" : "667px",
                  width: "100%",
                }}
              />
            </SandpackLayout>
          </SandpackProvider>
        </div>
      </div>
    </div>
  );
}
