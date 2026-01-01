"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
  onDone?: () => void;
};

const TypingText = ({ text, speed = 12, onDone }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let cancelled = false;

    const type = () => {
      if (cancelled) return;

      if (index < text.length) {
        setDisplayed((prev) => prev + text[index]);
        index++;
        setTimeout(type, speed);
      } else {
        onDone?.(); // 🔑 signal completion
      }
    };

    type();

    return () => {
      cancelled = true;
    };
  }, [text, speed, onDone]);

  return <>{displayed}</>;
};

export default TypingText;
