"use client";

import {
  SandpackProvider,
  SandpackPreview,
  SandpackLayout,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { useBuilderStore } from "@/stores/builder-store";
import { Monitor, Tablet, Smartphone, RefreshCw, AlertTriangle, Wrench } from "lucide-react";
import type { DeviceFrame } from "@/types/builder";
import { useState, useMemo, useEffect, useCallback } from "react";

const DEVICE_WIDTHS: Record<DeviceFrame, string> = {
  mobile: "375px",
  tablet: "768px",
  desktop: "100%",
};

/** Inner component that has access to Sandpack context for error detection */
function PreviewWithErrorDetection() {
  const { sandpack } = useSandpack();
  const autoFixError = useBuilderStore((s) => s.autoFixError);
  const isGenerating = useBuilderStore((s) => s.isGenerating);
  const autoFixAttempts = useBuilderStore((s) => s.autoFixAttempts);
  const [lastError, setLastError] = useState<string | null>(null);

  // Watch for Sandpack errors
  useEffect(() => {
    const error = sandpack.error;
    if (error && !isGenerating && autoFixAttempts < 3) {
      const errorMsg = error.message || String(error);
      if (errorMsg !== lastError) {
        setLastError(errorMsg);
        const timer = setTimeout(() => {
          autoFixError(errorMsg);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else if (!error) {
      setLastError(null);
    }
  }, [sandpack.error, isGenerating, autoFixAttempts, autoFixError, lastError]);

  return (
    <>
      <SandpackPreview
        showNavigator={false}
        showRefreshButton={false}
        style={{ height: "100%", width: "100%" }}
      />
      {/* Error overlay */}
      {sandpack.error && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-950/90 backdrop-blur-sm border-t border-red-500/30 px-4 py-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-red-300 font-medium">
                {autoFixAttempts < 3 && !isGenerating
                  ? "Error detected — auto-fixing..."
                  : autoFixAttempts >= 3
                    ? "Auto-fix limit reached"
                    : "Error detected"
                }
              </p>
              <p className="text-xs text-red-400/70 mt-0.5 truncate">
                {(sandpack.error.message || String(sandpack.error)).slice(0, 100)}
              </p>
            </div>
            {autoFixAttempts < 3 && !isGenerating && (
              <Wrench className="w-4 h-4 text-red-400 animate-spin flex-shrink-0" />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function PreviewPanel() {
  const files = useBuilderStore((s) => s.files);
  const deviceFrame = useBuilderStore((s) => s.deviceFrame);
  const setDeviceFrame = useBuilderStore((s) => s.setDeviceFrame);
  const [refreshKey, setRefreshKey] = useState(0);

  // Convert our files to Sandpack format
  const sandpackFiles = useMemo(() => {
    const spFiles: Record<string, string> = {};

    for (const [path, content] of Object.entries(files)) {
      spFiles[`/${path}`] = content;
    }

    // Ensure there's always an App.tsx
    if (!spFiles["/src/App.tsx"] && !spFiles["/App.tsx"]) {
      spFiles["/src/App.tsx"] = `export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Your app will appear here</h1>
        <p className="text-zinc-500 text-sm">Send a message to start building</p>
      </div>
    </div>
  );
}`;
    }

    return spFiles;
  }, [files]);

  const devices: Array<{ frame: DeviceFrame; icon: typeof Monitor; label: string }> = [
    { frame: "mobile", icon: Smartphone, label: "Mobile" },
    { frame: "tablet", icon: Tablet, label: "Tablet" },
    { frame: "desktop", icon: Monitor, label: "Desktop" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#0A0A0F]">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800/50">
        <span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">
          Preview
        </span>
        <div className="flex items-center gap-1">
          {/* Device frame switcher — pill toggle */}
          <div className="flex items-center bg-zinc-900 rounded-lg p-0.5 border border-zinc-800/50">
            {devices.map(({ frame, icon: Icon, label }) => (
              <button
                key={frame}
                onClick={() => setDeviceFrame(frame)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs transition-all ${
                  deviceFrame === frame
                    ? "bg-zinc-800 text-zinc-200 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-400"
                }`}
                title={label}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setRefreshKey((k) => k + 1)}
            className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800 transition-colors ml-1"
            title="Refresh preview"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Preview area */}
      <div className="flex-1 flex items-start justify-center overflow-auto bg-zinc-950/50 p-4">
        <div
          className="bg-white rounded-xl overflow-hidden shadow-2xl shadow-black/20 transition-all duration-300 relative"
          style={{
            width: DEVICE_WIDTHS[deviceFrame],
            maxWidth: "100%",
            height:
              deviceFrame === "desktop"
                ? "100%"
                : deviceFrame === "tablet"
                  ? "600px"
                  : "667px",
            minHeight: deviceFrame === "desktop" ? "100%" : undefined,
          }}
        >
          {/* Browser dots */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            <div className="flex-1 mx-2">
              <div className="bg-white rounded px-2 py-0.5 text-[10px] text-zinc-400 text-center border border-zinc-200">
                localhost:3000
              </div>
            </div>
          </div>

          <SandpackProvider
            key={refreshKey}
            template="react-ts"
            files={sandpackFiles}
            customSetup={{
              dependencies: {
                "lucide-react": "latest",
                "date-fns": "latest",
                recharts: "latest",
                "react-router-dom": "latest",
              },
            }}
            options={{
              externalResources: ["https://cdn.tailwindcss.com"],
              autorun: true,
              autoReload: true,
            }}
            theme="dark"
          >
            <SandpackLayout
              style={{ border: "none", borderRadius: 0, background: "white" }}
            >
              <div className="relative w-full" style={{
                height: deviceFrame === "desktop"
                  ? "calc(100vh - 180px)"
                  : deviceFrame === "tablet"
                    ? "560px"
                    : "627px",
              }}>
                <PreviewWithErrorDetection />
              </div>
            </SandpackLayout>
          </SandpackProvider>
        </div>
      </div>
    </div>
  );
}
