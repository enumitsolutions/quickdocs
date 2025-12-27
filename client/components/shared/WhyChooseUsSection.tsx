import { FileText, Zap, Lock, GitBranch } from "lucide-react";
import WhyChooseCard from "./WhyChooseCard";

const REASONS = [
  {
    title: "Docs from real code",
    description:
      "Quick Docs analyzes your actual project structure and files — not guesses, templates, or generic summaries.",
    icon: FileText,
    eyebrow: "Accuracy first",
  },
  {
    title: "Zero setup required",
    description:
      "Upload a ZIP or paste a GitHub URL and generate clean, readable documentation instantly. No config. No friction.",
    icon: Zap,
    eyebrow: "Instant value",
  },
  {
    title: "Safe by design",
    description:
      "Your code stays yours. No public indexing, no training on your repositories, and local workflows supported.",
    icon: Lock,
    eyebrow: "Privacy matters",
  },
  {
    title: "Built for real projects",
    description:
      "Works with messy repos, real-world stacks, and evolving codebases — not just demo apps.",
    icon: GitBranch,
    eyebrow: "Production-ready",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Why developers choose Quick Docs
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Built to remove documentation pain — not add another tool to manage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-14">
          {REASONS.map((reason) => (
            <WhyChooseCard
              key={reason.title}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              eyebrow={reason.eyebrow}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
