import { createFileRoute } from "@tanstack/react-router";
import coachingImg from "../assets/coaching.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Neelaya | Freediving & Mermaid Academy" },
      {
        name: "description",
        content:
          "Neel means blue, Alaya means home. Meet the instructors and the philosophy behind Neelaya Freediving & Mermaid Academy.",
      },
      { property: "og:title", content: "About Neelaya Academy" },
      { property: "og:description", content: "Neel means blue, Alaya means home. Our story and our instructors." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Arun Nair", role: "Head Instructor · Freediving", bio: "Instructor trainer with 12 years in the water and a personal best of 82m constant weight." },
  { name: "Leia Fernandes", role: "Mermaid Program Lead", bio: "Underwater performer turned coach, obsessed with making the ocean feel playful." },
  { name: "Kai Mendes", role: "Safety & Breathwork", bio: "Rescue specialist and breathwork facilitator; runs the apnea lab every Thursday." },
];

function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.35em] text-primary">Our story</p>
      <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
        Neel is blue. Alaya is home.
      </h1>
      <p className="mt-6 max-w-2xl text-muted-foreground">
        Neelaya began with a simple observation: the same blue that starts overhead ends far beneath
        the surface. We built an academy around that journey — teaching people to travel from sky to
        sea on a single breath, and to feel at home there.
      </p>

      <img
        src={coachingImg}
        alt="Freediving instructor guiding a student in calm water"
        width={1200}
        height={912}
        loading="lazy"
        className="mt-12 w-full rounded-3xl object-cover shadow-xl"
      />

      <h2 className="mt-16 text-2xl font-semibold text-foreground">What we believe</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {[
          ["Calm over depth", "Numbers follow relaxation. Never the other way around."],
          ["Safety is culture", "Every dive is buddied. Every student learns rescue."],
          ["Ocean respect", "Reef-safe practice, no-touch policy, monthly clean-up dives."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold text-card-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold text-foreground">The team</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {team.map((m) => (
          <div key={m.name} className="rounded-2xl bg-muted/60 p-6">
            <h3 className="font-semibold text-foreground">{m.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-primary">{m.role}</p>
            <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
