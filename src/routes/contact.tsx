import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Session | Neelaya Freediving & Mermaid Academy" },
      {
        name: "description",
        content:
          "Book a freediving or mermaid session at Neelaya Academy. Send us your preferred course and dates and we'll confirm within a day.",
      },
      { property: "og:title", content: "Book a Session | Neelaya Academy" },
      { property: "og:description", content: "Reserve your freediving or mermaid course with Neelaya Academy." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Come dive with us</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">
        Tell us what you'd like to learn and when you're around. We reply within one working day.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {sent ? (
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-xl font-semibold text-card-foreground">Request received</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Thank you — we'll be in touch shortly with availability and everything you need to bring.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-medium text-primary hover:underline"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form
            className="rounded-3xl border border-border bg-card p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm">
                <span className="font-medium text-card-foreground">Name</span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="text-sm">
                <span className="font-medium text-card-foreground">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm">
              <span className="font-medium text-card-foreground">Interested in</span>
              <select
                name="course"
                className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Discover Freediving</option>
                <option>Wave 1 — Certified Freediver</option>
                <option>Wave 2 — Advanced</option>
                <option>Breathwork & Apnea Lab</option>
                <option>Mermaid Discovery</option>
                <option>Mermaid Certified</option>
                <option>Mermaid Photoshoot</option>
              </select>
            </label>

            <label className="mt-5 block text-sm">
              <span className="font-medium text-card-foreground">Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Preferred dates, experience level, anything else..."
                className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send request
            </button>
          </form>
        )}

        <aside className="space-y-6">
          <div className="rounded-3xl bg-muted/60 p-7">
            <h2 className="text-lg font-semibold text-foreground">Visit the base</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 text-primary" /> Blue Bay Marina, Coastal Road</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 size-4 text-primary" /> hello@neelaya.blue</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 size-4 text-primary" /> +1 555 0142</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-muted/60 p-7">
            <h2 className="text-lg font-semibold text-foreground">Season & hours</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Courses run year-round. Freediving sessions launch at 7:00 and 14:00; mermaid classes
              on weekday evenings and weekend mornings.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
