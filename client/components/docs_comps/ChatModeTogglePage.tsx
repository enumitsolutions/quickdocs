"use client";

import { useState } from "react";
import NormalModeChat from "./NormalModeChat";
import AdvancedModeChat from "./AdvancedModeChat";

const ChatModeTogglePage = () => {
  const [mode, setMode] = useState<"normal" | "advanced">("normal");

  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Shared background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3  -translate-x-1/2 rounded-full bg-primary/15 blur-[180px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-28">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Documentation Assistant
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Ask questions, generate docs, or explore your codebase
            intelligently.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-muted p-1">
            {["normal", "advanced"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m as any)}
                className={`px-4 py-1.5 text-sm rounded-full transition ${
                  mode === m
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {m === "normal" ? "Normal Mode" : "Advanced Mode"}
              </button>
            ))}
          </div>
        </div>

        {/* Active Mode */}
        {mode === "normal" ? <NormalModeChat /> : <AdvancedModeChat />}
      </div>
    </section>
  );
};

export default ChatModeTogglePage;
