import { Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
            bg-size-[24px_24px]
            opacity-40
            mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]
          "
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Announcement */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium">
            <Badge variant="default" className="px-2 py-0.5">
              New
            </Badge>
            <span className="text-muted-foreground">
              Get all your leads in one place
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-balance font-semibold tracking-tight text-[clamp(2.25rem,4vw,3.5rem)] leading-tight">
            The next-gen Helpdesk designed for efficiency.
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-sm sm:text-base text-muted-foreground">
            The Calley Customer Service Suite combines the #1 AI Agent for
            customer support with a next-gen Helpdesk built on a single
            platform.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full gap-2">
              <Link href="/generate-docs">
                <Play className="h-4 w-4" />
                Get started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
