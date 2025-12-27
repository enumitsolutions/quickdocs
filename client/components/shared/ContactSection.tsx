"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Badge } from "@/components/ui/badge";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const FORM_FIELDS = [
  { id: "firstName", label: "First Name", type: "text", placeholder: "John" },
  { id: "lastName", label: "Last Name", type: "text", placeholder: "Doe" },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
  },
  { id: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
];

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="relative group grid gap-10 rounded-3xl border border-primary/30 bg-background p-6 lg:grid-cols-2 lg:p-10">
          {/* Hover circular glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[160px]" />
          </div>

          {/* LEFT */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />

            <div className="relative z-10 p-6">
              <Badge variant="secondary">Contact</Badge>

              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                Let’s build something useful
              </h3>

              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Questions, partnerships, or feedback — reach out and we’ll
                respond quickly.
              </p>
            </div>

            <div className="relative z-10 m-4 flex items-center justify-between rounded-xl border border-primary/30 bg-background/80 p-4 backdrop-blur">
              <div>
                <p className="text-xs text-muted-foreground">
                  Partnerships & collaborations
                </p>
                <p className="text-sm font-medium">collabs@quickdocs.io</p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                →
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Get in touch
            </h2>

            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Fill out the form and we’ll get back to you within 24 hours.
            </p>

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              {FORM_FIELDS.map((field) => (
                <div key={field.id} className="space-y-1">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div className="sm:col-span-2 space-y-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us what you’re looking to build"
                />
              </div>

              <div className="sm:col-span-2 flex items-start gap-2 text-sm text-muted-foreground">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="underline underline-offset-4">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline underline-offset-4">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              <div className="sm:col-span-2 flex justify-end">
                <Button size="lg" className="rounded-full">
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
