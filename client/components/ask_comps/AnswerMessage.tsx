"use client";

import { useState } from "react";
import SectionBlock from "./SectionBlock";
import { normalizeAnswer } from "@/utils/normalizeAnswer";

const AnswerMessage = ({ message }: any) => {
  const sections = normalizeAnswer(message.answer);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-8">
      {/* Question */}
      <div className="flex justify-end">
        <div
          className="
          max-w-[80%]
          rounded-2xl
          bg-primary text-primary-foreground
          px-4 py-2
          text-sm
          shadow-sm
        "
        >
          {message.question}
        </div>
      </div>

      {/* Answer */}
      <div className="flex justify-start">
        <div
          className="
          max-w-[92%]
          rounded-2xl
          bg-muted/50
          px-6 py-6
          shadow-sm
          space-y-8
        "
        >
          {sections.map((section, idx) => {
            let mode: "completed" | "typing" | "hidden" = "hidden";

            if (idx < activeIndex) mode = "completed";
            else if (idx === activeIndex) mode = "typing";

            return (
              <SectionBlock
                key={idx}
                title={section.title}
                content={section.content}
                mode={mode}
                onComplete={() =>
                  setActiveIndex((prev) => Math.min(prev + 1, sections.length))
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnswerMessage;
