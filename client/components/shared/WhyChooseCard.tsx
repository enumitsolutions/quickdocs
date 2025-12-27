import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface WhyChooseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  eyebrow?: string; // small supporting text
}

const WhyChooseCard = ({
  title,
  description,
  icon: Icon,
  eyebrow = "Why it matters",
}: WhyChooseCardProps) => {
  return (
    <div className="relative group">
      {/* Glow – only on hover/focus */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition">
        <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl" />
      </div>

      <Card
        className="
          h-full rounded-2xl border-primary/30
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        <CardHeader className="pb-2">
          {/* Icon */}
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>

          {/* Eyebrow */}
          <span className="text-xs font-medium uppercase tracking-wide text-primary">
            {eyebrow}
          </span>

          {/* Title */}
          <CardTitle className="mt-1 text-lg tracking-tight">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {/* Supporting bullet */}
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>Built for real-world developer workflows</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhyChooseCard;
