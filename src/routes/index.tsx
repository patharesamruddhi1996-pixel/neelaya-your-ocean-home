import { createFileRoute, Link } from "@tanstack/react-router";
import { Waves, Wind, Anchor, HeartHandshake, ArrowRight } from "lucide-react";
import heroImg from "../assets/hero-freedive.jpg";
import mermaidImg from "../assets/mermaid-class.jpg";
import coachingImg from "../assets/coaching.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neelaya Freediving & Mermaid Academy | From Sky to Sea" },
      {
        name: "description",
        content:
          "Learn freediving and mermaid swimming with Neelaya Academy. Certified courses, breathwork and ocean confidence — from sky to sea, your home in the blue.",
      },
      { property: "og:title", content: "Neelaya Freediving & Mermaid Academy" },
      {
        property: "og:description",
        content: "Certified freediving and mermaid courses. From sky to sea, your home in the blue.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Wind, title: "Breath first", text: "Breathwork and relaxation are the foundation of every dive we teach." },
  { icon: Waves, title: "Ocean confidence", text: "Small groups, calm water, and progression that never rushes you." },
  { icon: Anchor, title: "Safety always", text: "Certified instructors, one-to-one buddy protocols, rescue-ready." },
  { icon: HeartHandshake, title: "A home in the blue", text: "A community that dives, learns and celebrates together." },
];

function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Freediver descending a line into deep blue ocean"
          width={1920}
          height={1200}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/60 via-deep-900/45 to-deep-900/85" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-5 py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-200">Neelaya Academy</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-sky-50 sm:text-6xl">
            From sky to sea, your home in the blue.
          </h1>
          <p className="mt-6 max-w-xl text-base text-sky-100 sm:text-lg">
            Freediving and mermaid courses for everyone who has ever wanted to hold one breath and
            feel the ocean hold them back.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/freediving"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore freediving <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/mermaid"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200/50 px-6 py-3 text-sm font-medium text-sky-50 transition-colors hover:bg-sky-50/10"
            >
              Mermaid classes
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              The name is the promise
            </h2>
            <p className="mt-5 text-muted-foreground">
              <strong className="text-foreground">Neel</strong> is blue — the blue that travels from
              the sky, through the surface, down into the deep.{" "}
              <strong className="text-foreground">Alaya</strong> is home. Neelaya is the journey
              between the two, and the feeling of arriving.
            </p>
            <p className="mt-4 text-muted-foreground">
              We teach freediving as a practice of calm rather than conquest, and mermaid swimming as
              pure play in the water. Both start the same way: one breath, one descent, one home.
            </p>
          </div>
          <img
            src={coachingImg}
            alt="Instructor coaching a freediving student at the surface"
            width={1200}
            height={912}
            loading="lazy"
            className="rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold text-foreground">How we dive</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <Icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/freediving"
            className="group relative overflow-hidden rounded-3xl bg-deep-800 p-8 text-sky-50"
          >
            <img
              src={heroImg}
              alt="Freediver in blue water"
              width={1920}
              height={1200}
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-200">Courses</p>
              <h3 className="mt-3 text-2xl font-semibold">Freediving</h3>
              <p className="mt-2 max-w-sm text-sm text-sky-100">
                Beginner to advanced depth, plus breathwork and safety training.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                See the levels <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>

          <Link
            to="/mermaid"
            className="group relative overflow-hidden rounded-3xl bg-ocean-600 p-8 text-sky-50"
          >
            <img
              src={mermaidImg}
              alt="Swimmer in a mermaid tail gliding underwater"
              width={1200}
              height={900}
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-200">Courses</p>
              <h3 className="mt-3 text-2xl font-semibold">Mermaid</h3>
              <p className="mt-2 max-w-sm text-sm text-sky-100">
                Monofin technique, underwater grace, and photoshoot sessions.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Meet the tails <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-4 text-center">
        <blockquote className="text-xl italic text-foreground sm:text-2xl">
          “I came to learn to hold my breath. I left knowing how to be still.”
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">Maya R. — Wave 1 graduate</p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Book your first session <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
