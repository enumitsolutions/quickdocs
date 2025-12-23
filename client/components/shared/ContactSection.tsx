import React from "react";

/* ---------------- CONFIG ---------------- */

const FORM_FIELDS = [
  { label: "First Name", type: "text", placeholder: "Enter first name" },
  { label: "Last Name", type: "text", placeholder: "Enter last name" },
  { label: "Email", type: "email", placeholder: "Enter your email" },
  { label: "Phone", type: "tel", placeholder: "Enter phone number" },
];

/* ---------------- COMPONENT ---------------- */

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Glow background (footer synced) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-3xl border border-primary/30 bg-background p-6 lg:p-10">
          {/* LEFT — BRAND / VISUAL */}
          <div className="relative overflow-hidden rounded-2xl bg-muted flex flex-col justify-between  lg:min-h-full">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/25 via-primary/10 to-transparent" />

            {/* Brand content */}
            <div className="relative z-10 p-6">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Contact
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                Let’s build something great together
              </h3>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Whether it’s a partnership, a product question, or a quick chat
                — we’re here.
              </p>
            </div>

            {/* Contact chip */}
            <div className="relative z-10 m-4 rounded-xl bg-background/80 backdrop-blur border border-primary/30 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">
                  Partnerships & Collaborations
                </p>
                <p className="text-sm font-medium">collabs@quickdock.io</p>
              </div>
              <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                →
              </span>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Get in touch
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Fill out the form below and our team will get back to you shortly.
            </p>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dynamic Fields */}
              {FORM_FIELDS.map((field) => (
                <div key={field.label}>
                  <label className="text-sm font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-1 w-full rounded-lg border border-primary/30 bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              ))}

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us a bit about what you’re looking for"
                  className="mt-1 w-full rounded-lg border border-primary/30 bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              {/* Terms */}
              <div className="sm:col-span-2 flex items-start gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="mt-1 rounded border-border" />
                <span>
                  I agree with the{" "}
                  <a href="#" className="underline underline-offset-4">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline underline-offset-4">
                    Privacy Policy
                  </a>
                </span>
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
