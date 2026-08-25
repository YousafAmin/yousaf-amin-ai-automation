"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { budgetRanges, contactChannels, contactMethods, serviceOptions } from "@/lib/data/contact";
import { getIcon } from "@/lib/icons";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const business = formData.get("business") as string;
    const service = formData.get("service") as string;
    const description = formData.get("description") as string;
    const budget = formData.get("budget") as string;
    const preferred = formData.get("preferred") as string;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business}`,
      `Service Needed: ${service}`,
      `Budget Range: ${budget}`,
      `Preferred Contact Method: ${preferred}`,
      "",
      "Project Description:",
      description,
    ].join("\n");

    const mailto = `mailto:your-email@example.com?subject=${encodeURIComponent(
      `New Project Inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <RevealOnScroll>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-accent-2">
            Contact
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to Build a Smarter Business?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Tell me what you&apos;re trying to improve, automate, or build. I&apos;ll help identify the
            right system for the job.
          </p>

          <div className="mt-8 space-y-3">
            {contactChannels.map((channel) => {
              const Icon = getIcon(channel.icon);
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-glass flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors hover:border-white/20"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={16} className="text-accent-2" />
                    <span className="text-sm font-medium text-foreground/90">{channel.label}</span>
                  </span>
                  <span className="text-xs text-muted-2">{channel.value}</span>
                </a>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-muted-2">
            Contact links above are placeholders — replace them with your real profiles before launch.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="card-glass rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="h-12 w-12 text-success" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-semibold text-foreground">Your email client should now be open</h3>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Send the pre-filled message to complete your inquiry. I&apos;ll follow up as soon as possible.
              </p>
              <Button variant="secondary" size="sm" className="mt-6" onClick={() => setSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Business" name="business" placeholder="Company / brand name" />
                <SelectField label="Service Needed" name="service" options={serviceOptions} />
              </div>
              <TextAreaField
                label="Project Description"
                name="description"
                required
                placeholder="What are you trying to automate, build, or improve?"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField label="Budget Range" name="budget" options={budgetRanges} />
                <SelectField label="Preferred Contact Method" name="preferred" options={contactMethods} />
              </div>

              <Button type="submit" size="lg" className="mt-2 w-full sm:w-fit">
                Start a Project
                <Send size={16} />
              </Button>
            </form>
          )}
        </RevealOnScroll>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-foreground/90">
        {label}
        {required ? <span className="text-accent-2"> *</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-border-strong bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent-2/60"
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-foreground/90">
        {label}
        {required ? <span className="text-accent-2"> *</span> : null}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="resize-none rounded-xl border border-border-strong bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent-2/60"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-foreground/90">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="rounded-xl border border-border-strong bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-2/60"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-surface text-foreground">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
