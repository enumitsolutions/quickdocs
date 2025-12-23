import { LucideIcon } from "lucide-react";

interface WhyChooseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  rotate?: string;
  translate?: string;
}

const WhyChooseCard = ({
  title,
  description,
  icon: Icon,
  rotate = "",
  translate = "",
}: WhyChooseCardProps) => {
  return (
    <div
      className={`
        group relative rounded-2xl border border-primary/30
        bg-background p-6
        shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:-translate-y-2 hover:rotate-0
        ${rotate} ${translate}
      `}
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 rounded-2xl bg-primary/15 blur-2xl" />
      </div>

      {/* Icon */}
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseCard;
