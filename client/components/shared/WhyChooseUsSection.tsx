import { Sparkles, Settings, Users, Shield } from "lucide-react";
import WhyChooseCard from "./WhyChooseCard";

const reasons = [
  {
    title: "Expertise",
    description:
      "We bring deep technical expertise and proven experience to deliver reliable, high-quality solutions.",
    icon: Sparkles,
    rotate: "-rotate-6",
    translate: "-translate-y-6",
  },
  {
    title: "Custom Solutions",
    description:
      "Every product is tailored to your business needs — no generic templates or shortcuts.",
    icon: Settings,
    rotate: "rotate-6",
    translate: "-translate-y-2",
  },
  {
    title: "Customer-Focused",
    description:
      "We prioritize long-term value, clear communication, and outcomes that actually matter.",
    icon: Users,
    rotate: "-rotate-3",
    translate: "translate-y-4",
  },
  {
    title: "Secure & Scalable",
    description:
      "Built with modern best practices to ensure security, performance, and future growth.",
    icon: Shield,
    rotate: "rotate-3",
    translate: "translate-y-8",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Footer-style glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Why choose us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Here’s why teams trust us to design, build, and scale their digital
            products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {reasons.map((item) => (
            <WhyChooseCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              rotate="md:${item.rotate}"
              translate="md:${item.translate}"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
