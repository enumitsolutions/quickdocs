import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <div className="relative">
      {/* Glow ONLY when highlighted */}
      {highlighted && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 rounded-2xl bg-primary/25 blur-3xl" />
        </div>
      )}

      <Card
        className={`relative flex flex-col rounded-2xl transition
          ${
            highlighted
              ? "ring-2 ring-primary shadow-xl scale-[1.03]"
              : "border-border"
          }
        `}
      >
        {badge && (
          <Badge
            className="absolute -top-3 left-1/2 -translate-x-1/2"
            variant="secondary"
          >
            {badge}
          </Badge>
        )}

        <CardHeader className="text-center">
          <CardTitle className="text-lg">{name}</CardTitle>
          <div className="mt-4">
            <span className="text-4xl font-bold">{price}</span>
            <CardDescription className="mt-1">{subtitle}</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <ul className="space-y-3 text-sm">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full cursor-pointer"
            size="lg"
            variant={highlighted ? "default" : "secondary"}
          >
            {cta}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingCard;
