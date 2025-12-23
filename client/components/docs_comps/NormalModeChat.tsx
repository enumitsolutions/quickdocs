"use client";

import { useState } from "react";
import {
  UploadCloud,
  Github,
  Layers,
  CheckCircle2,
  FileText,
} from "lucide-react";

const STACKS = [
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "Django",
  "Java",
  "Rust",
  "Go",
  "React",
  "Next.js",
];

const NormalModeChat = () => {
  const [githubUrl, setGithubUrl] = useState("");
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  const toggleStack = (stack: string) => {
    setSelectedStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* ───────────────── HEADER (CENTER) ───────────────── */}
      <div className="mb-14 flex flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <FileText className="h-7 w-7" />
        </div>

        <h2 className="text-2xl font-semibold tracking-tight">
          Documentation Generator
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Upload your codebase or connect a GitHub repository to generate
          structured, enterprise-ready technical documentation.
        </p>
      </div>

      {/* ───────────────── BODY (LEFT / RIGHT) ───────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl bg-muted/70 backdrop-blur p-10 shadow-xl">
        {/* LEFT — SOURCE */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <UploadCloud className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium">Project Source</h3>
          </div>

          {/* ZIP */}
          <div className="mb-6 rounded-2xl bg-background/70 p-6">
            <div className="mb-3 flex items-center gap-2">
              <UploadCloud className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Upload ZIP</span>
            </div>

            <p className="mb-4 text-sm text-muted-foreground">
              Upload a compressed ZIP file containing your project.
            </p>

            <button className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              Select ZIP File
            </button>
          </div>

          {/* GITHUB */}
          <div className="rounded-2xl bg-background/70 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Github className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">GitHub Repository URL</span>
            </div>

            <input
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/org/repository"
              className="w-full rounded-xl bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        {/* RIGHT — STACKS */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Layers className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium">Technology Stack</h3>
          </div>

          <p className="mb-6 max-w-md text-sm text-muted-foreground">
            Select all technologies used in this project to ensure accurate
            documentation generation.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {STACKS.map((stack) => {
              const active = selectedStacks.includes(stack);
              return (
                <button
                  key={stack}
                  type="button"
                  onClick={() => toggleStack(stack)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm transition ${
                    active
                      ? "bg-primary/15 text-primary"
                      : "bg-background/70 text-muted-foreground hover:bg-background"
                  }`}
                >
                  <span>{stack}</span>
                  {active && <CheckCircle2 className="h-4 w-4" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ───────────────── CTA (CENTER) ───────────────── */}
      <div className="mt-14 flex justify-center">
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-12 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
          <FileText className="h-4 w-4" />
          Generate Documentation
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Designed for enterprise teams and production codebases
      </p>
    </div>
  );
};

export default NormalModeChat;
