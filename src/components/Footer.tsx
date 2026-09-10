import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer id="contact" className="mx-auto mt-80 w-full max-w-[1200px] px-16 pb-64">
      <div className="flex flex-col items-center gap-16 text-center">
        <p className="font-brisa-pro text-annotation text-vermillion">
          let&apos;s build something →
        </p>
        <h2 className="font-haffer-xh text-heading-sm text-ink">
          Say hello.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-buttons bg-obsidian px-20 py-8 font-haffer-vf text-body-sm font-bold text-concrete"
        >
          {profile.email}
        </a>
        <div className="mt-16 flex gap-16">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-haffer-vf text-body-sm text-steel hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
