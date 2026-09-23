import { getModrinthProjects } from "@/lib/projects"

const template = {
  component: {
    type: 17,
    accent_color: null,
    spoiler: false,
    components: [
      {
        type: 9,
        accessory: {
          type: 11,
          media: {
            url: "https://github.com/wayback09.png",
            proxy_url: "https://github.com/wayback09.png",
          },
          description: null,
          spoiler: false,
        },
        components: [
          {
            type: 10,
            content:
              "# Hi!, I'm wayback\nI build custom Minecraft plugins for servers and open-source apps & tools.",
          },
        ],
      },
      {
        type: 14,
        divider: true,
        spacing: 1,
      },
      {
        type: 10,
        content: "## Projects\n",
      },
      {
        type: 14,
        divider: true,
        spacing: 1,
      },
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 5,
            label: "Portfolio",
            emoji: null,
            disabled: false,
            url: "https://github.com/wayback09/portfolio",
          },
          {
            type: 2,
            style: 5,
            label: "GitHub",
            emoji: null,
            disabled: false,
            url: "https://github.com/wayback09",
          },
          {
            type: 2,
            style: 5,
            label: "Modrinth",
            emoji: null,
            disabled: false,
            url: "https://modrinth.com/user/wayback",
          },
        ],
      },
    ],
  },
}

const DiscordEmbed = async () => {
  const generated = structuredClone(template)
  const projects = (await getModrinthProjects())
    .map((project) => `- [${project.title}](${project.href})`)
    .join("\n")
  generated.component.components[2].content +=
    projects.length > 0 ? projects : "_I'm still projectless..._"

  return (
    <script
      id="discord:component-embed"
      type="application/json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generated),
      }}
    />
  )
}

export { DiscordEmbed }
