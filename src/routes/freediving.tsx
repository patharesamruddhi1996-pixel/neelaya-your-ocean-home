import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import heroImg from "../assets/hero-freedive.jpg";

export const Route = createFileRoute("/freediving")({
  head: () => ({
    meta: [
      { title: "Freediving Courses | Neelaya Academy" },
      {
        name: "description",
        content:
          "Certified freediving courses from first breath-hold to 30m depth. Breathwork, equalisation, safety and rescue — taught in small groups.",
      },
      { property: "og:title", content: "Freediving Courses | Neelaya Academy" },
      {
        property: "og:description",
        content: "From first breath-hold to 30m. Small-group freediving courses with certified instructors.",
      },
    ],
  }),
  component: Freediving,
});

const courses = [
  {
    name: "Discover Freediving",
    depth: "up to 6m",
    length: "Half day",
    price: "$95",
    points: ["Relaxation & breathe-up", "Static apnea in shallow water", "Duck dive and finning basics", "No experience needed"],
  },
  {
    name: "Wave 1 — Certified Freediver",
    depth: "up to 20m",
    length: "2.5 days",
    price: "$420",
    points: ["Frenzel equalisation", "Free immersion & constant weight", "Buddy safety and rescue", "Internationally recognised card"],
  },
  {
    name: "Wave 2 — Advanced",
    depth: "up to 30m",
    length: "3 days",
    price: "$560",
    points: ["Mouthfill introduction", "Deep-water rescue scenarios", "Dive planning & tables", "Mental training for depth"],
  },
  {
    name: "Breathwork & Apnea Lab",
    depth: "Pool / land",
    length: "2 hours",
    price: "$45",
    points: ["CO₂ and O₂ tolerance tables", "Diaphragm mobility work", "Stress-response training", "Drop-in friendly"],
  },
];

function Freediving() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Freediver descending into blue water" width={1920} height={1200} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-deep-900/70" />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <h1 className="max-w-2xl text-4xl font-semibold text-sky-50 sm:text-5xl">Freediving courses</h1>
          <p className="mt-5 max-w-xl text-sky-100">
            One breath, one line, one calm mind. Progression built on relaxation — never on pushing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((c) => (
            <article key={c.name} className="flex flex-col rounded-3xl border border-border bg-card p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-semibold text-card-foreground">{c.name}</h2>
                <span className="text-lg font-semibold text-primary">{c.price}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{c.depth} · {c.length}</p>
              <ul className="mt-5 space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-7 inline-flex justify-center rounded-full border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Reserve a spot
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-muted/60 p-8">
          <h2 className="text-2xl font-semibold text-foreground">What's included</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            All courses include equipment (wetsuit, mask, long fins, weights), boat or shore access,
            insurance, theory materials, and unlimited coaching time at the surface. Maximum four
            students per instructor.
          </p>
        </div>
      </section>
    </div>
  );
}
