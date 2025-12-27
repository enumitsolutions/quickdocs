import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ---------------- CONFIG ---------------- */

const TOP_NAV_LINKS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Benefits", href: "/benefits" },
  { label: "Features", href: "/features" },
  { label: "Team", href: "/team" },
];

const FOOTER_LINKS = {
  Product: [
    { label: "Pricing", href: "/pricing" },
    { label: "Features", href: "/features" },
    { label: "Changelog", href: "/changelog" },
  ],
  Resources: [
    { label: "Docs", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
};

const SOCIAL_LINKS = [
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

/* ---------------- COMPONENT ---------------- */

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[180px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* CTA + Top Nav */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* CTA */}
          <div>
            <Badge variant="secondary">Get started</Badge>

            <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl font-semibold tracking-tight">
              Generate documentation directly from your codebase
            </h2>

            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              Upload a ZIP or connect a GitHub repo and get clean, readable docs
              in minutes — no setup required.
            </p>

            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link href="/generate-docs">Try Quick Docs</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>

          {/* Top Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground lg:justify-end">
            {TOP_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-16" />

        {/* Brand */}
        <div className="text-center">
          <h1 className="text-[clamp(2.25rem,7vw,5rem)] font-extrabold tracking-tight">
            QUICK DOCS
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Documentation that actually reflects your code.
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-4 font-medium">{section}</h4>
              <ul className="space-y-2 text-muted-foreground">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-foreground transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} <strong>Quick Docs</strong>. All rights
            reserved.
          </span>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="hover:text-foreground transition"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
