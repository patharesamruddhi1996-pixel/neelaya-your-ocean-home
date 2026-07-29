import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Camera, Users } from "lucide-react";
import mermaidImg from "../assets/mermaid-class.jpg";

export const Route = createFileRoute("/mermaid")({
  head: () => ({
    meta: [
      { title: "Mermaid Swimming Classes | Neelaya Academy" },
      {
        name: "description",
        content:
          "Mermaid swimming classes with monofin technique, underwater grace and photoshoot sessions. For kids, adults and complete beginners.",
      },
      { property: "og:title", content: "Mermaid Swimming Classes | Neelaya Academy" },
      {
        property: "og:description",
        content: "Monofin technique, underwater grace and mermaid photoshoots at Neelaya Academy.",
      },
    ],
  }),
  component: Mermaid,
});

const programs = [
  { icon: Sparkles, title: "Mermaid Discovery", detail: "90 min · $70", text: "Your first tail. Monofin dolphin kick, safe surfacing, and a lot of laughing underwater." },
  { icon: Users, title: "Mermaid Certified", detail: "2 days · $340", text: "Full technique syllabus, breath-hold skills, buddy safety and a recognised mermaid certification." },
  { icon: Camera, title: "Mermaid Photoshoot", detail: "2 hours · $180", text: "Tail, styling and an underwater photographer. You leave with edited images of your session." },
];

function Mermaid() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img src={mermaidImg} alt="Swimmer in a blue mermaid tail underwater" width={1200} height={900} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-900/85 to-ocean-600/50" />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <h1 className="max-w-2xl text-4xl font-semibold text-sky-50 sm:text-5xl">Mermaid academy</h1>
          <p className="mt-5 max-w-xl text-sky-100">
            The most joyful way to learn to move underwater. Tails provided — bring the imagination.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map(({ icon: Icon, title, detail, text }) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-7">
              <Icon className="size-6 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-card-foreground">{title}</h2>
              <p className="mt-1 text-sm font-medium text-primary">{detail}</p>
              <p className="mt-3 text-sm text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-3xl bg-muted/60 p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Who it's for</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Anyone comfortable in water from age 8 up. No breath-hold experience required — we
              start in chest-deep water and build from there. Kids' groups run on weekends, adult
              sessions on weekday evenings.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a mermaid session
            </Link>
          </div>
          <img
            src={mermaidImg}
            alt="Mermaid swimmer gliding through turquoise water"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
