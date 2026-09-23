export default function Page() {
  return (
    <div className="space-y-16">
      <div className="my-48 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="tv-glow-text text-5xl font-bold">
            Hi, I&apos;m wayback
          </h1>
          <div
            aria-hidden="true"
            className="tv-test-bars h-1.5 w-56 rounded-full opacity-90"
          />
          <p className="text-lg font-semibold text-muted-foreground">
            I build custom Minecraft plugins for servers and open-source apps
            & tools.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-left text-2xl font-bold sm:text-center">
          Tech stacks
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <TechStack title="Minecraft" elements={["Paper API", "Java"]} />
          <TechStack
            title="Languages"
            elements={["Go", "Rust", "TypeScript", "Python", "Java"]}
          />
          <TechStack
            title="Tools & Frameworks"
            elements={[
              "Wails",
              "Svelte",
              "React",
              "SQLite",
              "Git",
              "Linux",
              "Windows",
            ]}
          />
        </div>
      </div>
    </div>
  )
}

const TechStack = ({
  title,
  elements,
}: {
  title: string
  elements: string[]
}) => (
  <div className="flex justify-start rounded-lg border bg-card p-4 shadow-[0_0_24px_rgba(0,206,255,0.08)] md:justify-center">
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-medium text-[var(--tv-cyan)]">{title}</h3>
      <ul className="space-y-1 text-sm">
        {elements.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  </div>
)
