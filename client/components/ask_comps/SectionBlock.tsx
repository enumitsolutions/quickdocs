import { cn } from "@/lib/utils";
import TypingText from "./TypingText";

type Props = {
  title: string;
  content: string;
  mode: "completed" | "typing" | "hidden";
  onComplete?: () => void;
};

const SectionBlock = ({ title, content, mode, onComplete }: Props) => {
  if (mode === "hidden") return null;

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>

      <div
        className={cn(
          "prose prose-sm max-w-none",
          "prose-neutral dark:prose-invert",
          "leading-relaxed",
          "whitespace-pre-line"
        )}
      >
        {mode === "typing" ? (
          <TypingText text={content} onDone={onComplete} />
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default SectionBlock;
