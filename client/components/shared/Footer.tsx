import Link from "next/link";

/* ---------------- CONFIG ---------------- */

const TOP_NAV_LINKS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Benefits", href: "/benefits" },
  { label: "Features", href: "/features" },
  { label: "Team", href: "/team" },
];

const FOOTER_LINKS = {
  About: [
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Security", href: "#" },
  ],
  Community: [
    { label: "Forum", href: "#" },
    { label: "Events", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Investors", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
];

/* ---------------- COMPONENT ---------------- */

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background text-foreground">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[180px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* CTA + Top Nav */}
        <div className="flex flex-col gap-10 border-b border-border pb-16">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* CTA */}
            <div>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Contact Us
              </span>

              <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl font-semibold tracking-tight">
                Interested in working together, trying QuickDock, or just
                learning more?
              </h2>

              <p className="mt-4 text-sm text-muted-foreground">
                Reach out directly at{" "}
                <a
                  href="mailto:contact@quickdock.io"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  contact@quickdock.io
                </a>
              </p>
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
        </div>

        {/* Brand (FULL WIDTH) */}
        <div className="mt-20 text-center">
          <h1 className="w-full text-[clamp(2.5rem,8vw,6rem)] font-extrabold tracking-tight">
            QUICK DOCS
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Build faster, ship smarter, and manage everything from one platform.
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

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} <strong>QuickDock</strong>. All rights
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
