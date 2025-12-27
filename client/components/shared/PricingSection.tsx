"use client";

import PricingCard from "./PricingCard";

const PRICING_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "Free",
    subtitle: "Forever free",
    features: [
      "Core features access",
      "Single user",
      "Limited storage",
      "Community support",
    ],
    cta: "Get started",
  },
  {
    id: "monthly",
    name: "Standard",
    price: "₹99",
    subtitle: "Per month",
    features: [
      "Everything in Basic",
      "Priority support",
      "Higher limits",
      "Advanced tools",
    ],
    highlighted: true, // 👈 default plan
    badge: "Most Popular",
    cta: "Start monthly",
  },
  {
    id: "lifetime",
    name: "Ultimate",
    price: "₹999",
    subtitle: "One-time payment",
    features: [
      "Lifetime access",
      "All future updates",
      "Unlimited usage",
      "Dedicated support",
    ],
    cta: "Buy once",
  },
];

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wide">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Simple pricing. No hidden costs.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Start free, upgrade when it makes sense. No surprises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
