interface Project {
  title: string
  slug: string
  href: string
}

const GITHUB_PROJECTS: Project[] = [
  {
    title: "Aether",
    slug: "aether",
    href: "https://github.com/Aether-Launcher/Aether",
  },
]

async function getModrinthProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      "https://api.modrinth.com/v2/user/wayback/projects",
      {
        headers: {
          "User-Agent": "wayback-portfolio",
        },
        next: { revalidate: 86400 },
      }
    )

    if (!res.ok) return []

    const data: any[] = await res.json()
    return data
      .filter((project) => project.project_type === "mod")
      .map((project): Project => ({
        title: project.title,
        slug: project.slug,
        href: `https://modrinth.com/project/${project.slug}`,
      }))
      .sort((a, b) => a.title.localeCompare(b.title))
  } catch (_) {
    return []
  }
}

async function getProjects(): Promise<Project[]> {
  const modrinth = await getModrinthProjects()
  return [...GITHUB_PROJECTS, ...modrinth].sort((a, b) =>
    a.title.localeCompare(b.title)
  )
}

export { getModrinthProjects, getProjects }
export type { Project }
