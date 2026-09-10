import { profile } from "@/content/site";

export function Nav() {
  return (
    <header className="sticky top-16 z-50 mx-auto flex w-full max-w-[1200px] justify-center px-16">
      <nav className="flex w-full items-center justify-between rounded-buttons border border-ink bg-concrete px-16 py-8">
        <span className="font-haffer-mono text-mono-label uppercase text-ink">
          Menu
        </span>
        <span className="font-haffer-xh text-[20px] leading-none tracking-[-0.02em] text-ink">
          {profile.name.toUpperCase()}
        </span>
        <div className="flex items-center gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="font-haffer-vf text-body-sm font-medium text-ink underline-offset-4 hover:underline"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-buttons bg-volt px-20 py-8 font-haffer-vf text-body-sm font-bold text-ink"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
