"use client";

import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Footer-style glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wide">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Simple pricing. No hidden costs.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Choose a plan that fits your needs today — upgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {/* BASIC */}
          <PricingCard
            name="Basic"
            price="Free"
            subtitle="Forever free"
            features={[
              "Core features access",
              "Single user",
              "Limited storage",
              "Community support",
            ]}
            cta="Get started"
          />

          {/* STANDARD (DEFAULT SELECTED) */}
          <PricingCard
            name="Standard"
            price="₹99"
            subtitle="Per month"
            features={[
              "Everything in Basic",
              "Priority support",
              "Higher limits",
              "Advanced tools",
            ]}
            highlighted
            badge="Most Popular"
            cta="Start monthly"
          />

          {/* ULTIMATE */}
          <PricingCard
            name="Ultimate"
            price="₹999"
            subtitle="One-time payment"
            features={[
              "Lifetime access",
              "All future updates",
              "Unlimited usage",
              "Dedicated support",
            ]}
            cta="Buy once"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
