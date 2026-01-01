"use client";

import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AskInput } from "./AskInput";

const AskSidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={cn(
        "relative h-full border-r bg-muted/30 transition-all duration-300 ease-in-out",
        open ? "w-90" : "w-16"
      )}
    >
      {/* Toggle button */}
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setOpen((p) => !p)}
        className="
          absolute -right-4 top-6 z-10
          h-8 w-8 rounded-full
          border bg-background shadow-sm
        "
      >
        {open ? (
          <PanelLeftClose className="h-4 w-4" />
        ) : (
          <PanelLeftOpen className="h-4 w-4" />
        )}
      </Button>

      {/* Content */}
      <div
        className={cn(
          "flex h-full flex-col overflow-hidden px-4 py-6",
          !open && "items-center px-0"
        )}
      >
        {/* Header */}
        <div
          className={cn(
            "mb-6 flex items-center gap-2 transition-opacity",
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold tracking-tight">
            Ask your project
          </h2>
        </div>

        {/* Input */}
        <div
          className={cn(
            "mt-auto transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <AskInput />
        </div>

        {/* Collapsed hint */}
        {!open && (
          <div className="mt-auto flex flex-col items-center gap-2 text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span className="text-[10px] rotate-90 whitespace-nowrap">Ask</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default AskSidebar;
