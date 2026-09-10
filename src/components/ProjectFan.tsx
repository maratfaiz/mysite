import { projects } from "@/content/site";

export function ProjectFan() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1200px] px-16 pt-80">
      <h2 className="mb-40 text-center font-haffer-mono text-mono-label uppercase text-steel">
        Selected work
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-24">
        {projects.map((project) => (
          <div
            key={project.title}
            style={{ transform: `rotate(${project.rotation}deg)` }}
            className="w-[220px] rounded-cards border border-charcoal bg-obsidian p-16 shadow-none transition-transform hover:rotate-0"
          >
            <div className="mb-40 aspect-video w-full rounded-sharp-tiles bg-charcoal" />
            <p className="font-haffer-vf text-body-sm text-concrete">
              {project.title}
            </p>
            <p className="mt-4 font-haffer-mono text-mono-label uppercase text-smoke">
              {project.tag}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
