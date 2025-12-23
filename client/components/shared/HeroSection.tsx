"use client";

import { Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Pattern background */}
      <div className="absolute inset-0 z-0">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
            bg-[size:20px_30px]
            opacity-60
            [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]
            [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]
          "
        />

        {/* Depth overlay (important, don’t skip) */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Announcement pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium">
            <span className="rounded-full bg-primary px-2 py-0.5 text-primary-foreground">
              New
            </span>
            <span className="text-muted-foreground">
              Get all your leads in one place
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-semibold tracking-tight text-[clamp(2rem,4vw,3.5rem)] leading-tight">
            The next-gen Helpdesk designed for efficiency.
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-sm sm:text-base text-muted-foreground">
            The Calley Customer Service Suite combines the #1 AI Agent for
            customer support with a next-gen Helpdesk built on a single
            platform.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/generate-docs"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              <Play className="h-4 w-4" />
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
