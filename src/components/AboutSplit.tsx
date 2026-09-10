import { skills } from "@/content/site";

export function AboutSplit() {
  return (
    <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-40 px-16 md:grid-cols-2">
      <div>
        <h2 className="font-haffer-xh text-subheading text-ink">About</h2>
        <p className="mt-16 text-body text-graphite">
          I care about the boring parts most people skip: clear error
          messages, fast feedback loops, and code that a stranger — or future
          me — can pick up without a walkthrough. I&apos;ve spent the last
          few years moving between backend systems and the tools that
          surround them, with a growing focus on building with and for AI
          agents.
        </p>
      </div>
      <div className="rounded-cards border border-charcoal bg-ash-gray p-16">
        <p className="mb-16 font-haffer-mono text-mono-label uppercase text-steel">
          Stack
        </p>
        <div className="flex flex-wrap gap-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-badges border border-ink px-8 py-4 font-haffer-mono text-mono-label uppercase text-ink"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
