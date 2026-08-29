"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { budgetRanges, contactChannels, contactMethods, serviceOptions } from "@/lib/data/contact";
import { getIcon } from "@/lib/icons";

type Status = "idle" | "submitting" | "success" | "error";

// Encodes a FormData-like record as an application/x-www-form-urlencoded body,
// the format Netlify's form-processing endpoint expects.
function encodeFormBody(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: bots tend to fill every field, humans never see this one.
    if ((formData.get("bot-field") as string)?.length) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormBody(payload),
      });

      if (!response.ok) throw new Error(`Submission failed with status ${response.status}`);

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
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
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="card-glass rounded-2xl p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="h-12 w-12 text-success" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-semibold text-foreground">Request Received</h3>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Thank you! Your project request has been received. I&apos;ll review your details and get
                back to you as soon as possible.
              </p>
              <Button variant="secondary" size="sm" className="mt-6" onClick={() => setStatus("idle")}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid gap-5"
            >
              {/* Required for Netlify's static form detection and submission routing. */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required placeholder="Jane Doe" />
                <Field label="Email Address" name="email" type="email" required placeholder="jane@company.com" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="WhatsApp / Phone Number" name="phone" type="tel" placeholder="+1 555 123 4567" />
                <Field label="Company / Brand Name" name="business" placeholder="Company / brand name" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField label="Service Needed" name="service" options={serviceOptions} required />
                <SelectField label="Budget Range" name="budget" options={budgetRanges} />
              </div>
              <TextAreaField
                label="Project Description"
                name="description"
                required
                placeholder="What are you trying to automate, build, or improve?"
              />
              <SelectField label="Preferred Contact Method" name="preferred" options={contactMethods} />

              {status === "error" ? (
                <div className="flex items-start gap-2.5 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Something went wrong sending your message. Please try again, or reach out directly using
                    the contact options above.
                  </span>
                </div>
              ) : null}

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="mt-2 w-full sm:w-fit"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Start a Project
                    <Send size={16} />
                  </>
                )}
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

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-foreground/90">
        {label}
        {required ? <span className="text-accent-2"> *</span> : null}
      </span>
      <select
        name={name}
        required={required}
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
