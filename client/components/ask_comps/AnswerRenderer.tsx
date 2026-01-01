"use client";

import { useAskStore } from "@/store/askStore";
import EmptyState from "./EmptyState";
import AnswerMessage from "./AnswerMessage";

const AnswerRenderer = () => {
  const { messages } = useAskStore();

  if (!messages.length) return <EmptyState />;

  return (
    <div className="mx-auto max-w-3xl space-y-16 pb-24">
      {messages.map((msg) => (
        <AnswerMessage key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default AnswerRenderer;
