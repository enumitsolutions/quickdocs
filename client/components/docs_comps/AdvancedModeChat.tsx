import { Upload, Github, Layers, Send } from "lucide-react";
import { useState } from "react";

const AdvancedModeChat = () => {
  const [value, setValue] = useState("");

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl bg-muted px-3 py-2 shadow-lg flex items-center gap-2">
        <div className="flex items-center gap-1">
          <button className="rounded-xl p-2 hover:bg-background/60 transition">
            <Upload className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="rounded-xl p-2 hover:bg-background/60 transition">
            <Github className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        {/* Input */}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask about architecture, APIs, setup, or code flow…"
          className="flex-1 bg-transparent px-2 py-2 text-sm focus:outline-none"
        />

        {/* Right controls */}
        <button className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-background/60 transition">
          <Layers className="h-4 w-4" />
          <span className="hidden sm:inline">Stacks</span>
        </button>

        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
          <Send className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Advanced mode supports ZIP uploads, GitHub repos, and stack selection
      </p>
    </div>
  );
};

export default AdvancedModeChat;
