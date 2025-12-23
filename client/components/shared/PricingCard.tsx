import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

const PricingCard = ({
  name,
  price,
  subtitle,
  features,
  highlighted = false,
  badge,
  cta,
}: PricingCardProps) => {
  return (
    <div
      className={`
        group relative flex flex-col rounded-2xl border
        p-6 transition-all duration-300
        ${
          highlighted
            ? "border-primary/30 bg-primary text-primary-foreground shadow-xl scale-[1.03]"
            : "border-border bg-background border-primary/30"
        }
      `}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl" />
      </div>

      {/* Badge */}
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-medium text-primary border border-border">
          {badge}
        </span>
      )}

      {/* Header */}
      <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span
            className={`block mt-1 text-sm ${
              highlighted
                ? "text-primary-foreground/80"
                : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`my-6 h-px ${
          highlighted ? "bg-primary-foreground/20" : "bg-border"
        }`}
      />

      {/* Features */}
      <ul className="space-y-3 text-sm flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check
              className={`h-4 w-4 mt-0.5 ${
                highlighted ? "text-background" : "text-primary"
              }`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-medium transition ${
          highlighted
            ? "bg-background text-primary hover:opacity-90"
            : "bg-primary text-primary-foreground hover:opacity-90"
        }`}
      >
        {cta}
      </button>
    </div>
  );
};

export default PricingCard;
