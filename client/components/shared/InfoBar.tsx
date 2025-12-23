"use client";

import { X } from "lucide-react";
import { useState } from "react";

const InfoBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-primary/15 text-primary">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between py-2 text-sm">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-md text-xs font-medium">
              New
            </span>

            <span className="hidden sm:inline">
              Now you can save you progress in the local storage
            </span>

            {/* Mobile text */}
            <span className="sm:hidden">Get 20% off your first order.</span>
          </div>

          {/* RIGHT SIDE */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Close"
            className="text-foreground hover:text-foreground/90 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
