"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAskStore } from "@/store/askStore";
import { useState } from "react";
import Spinner from "../shared/Spinner";

export const AskInput = () => {
  const [value, setValue] = useState("");
  const { ask, asking } = useAskStore();

  const submit = async () => {
    if (!value.trim()) return;
    await ask({
      question: value,
    });
    setValue("");
  };

  return (
    <div className="mt-auto space-y-2">
      <Textarea
        placeholder="Ask about architecture, flows, APIs..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={submit} disabled={asking} className="w-full cursor-pointer">
        {asking ? (
          <>
            <Spinner />
            Thinking...
          </>
        ) : (
          "Ask"
        )}
      </Button>
    </div>
  );
};
