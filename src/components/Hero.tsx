import { profile } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-16 pt-80 text-center">
      <span className="mb-16 rounded-badges bg-volt px-8 py-4 font-haffer-mono text-mono-label uppercase text-ink">
        ✱ Available for work
      </span>
      <h1 className="font-haffer-xh text-heading-sm text-ink sm:text-heading md:text-heading-lg">
        {profile.tagline}
      </h1>
      <p className="mt-24 max-w-xl text-body text-graphite">{profile.bio}</p>
      <div className="mt-40 flex flex-wrap items-center justify-center gap-12">
        <a
          href="#work"
          className="rounded-buttons bg-volt px-20 py-8 font-haffer-vf text-body-sm font-bold text-ink"
        >
          View work
        </a>
        <a
          href="#contact"
          className="rounded-buttons bg-obsidian px-20 py-8 font-haffer-vf text-body-sm font-bold text-concrete"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
