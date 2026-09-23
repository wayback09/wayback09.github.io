import { getProjects } from "@/lib/projects"

// TV cyan #00CEFF as a decimal accent color (Components V2: integer).
const ACCENT_COLOR = 0x00ceff

const EMBED_URL = "https://wayback09.github.io/embeds"

function baseTemplate() {
  return {
    component: {
      type: 17,
      accent_color: ACCENT_COLOR,
      spoiler: false,
      components: [
        {
          type: 9,
          components: [
            {
              type: 10,
              content:
                "# Hi!, I'm wayback\nI build custom Minecraft plugins for servers and open-source apps & tools.",
            },
          ],
          accessory: {
            type: 11,
            media: {
              url: "https://github.com/wayback09.png",
            },
            description: "wayback logo",
            spoiler: false,
          },
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
              url: "https://github.com/wayback09/portfolio",
            },
            {
              type: 2,
              style: 5,
              label: "Aether",
              url: "https://github.com/Aether-Launcher/Aether",
            },
            {
              type: 2,
              style: 5,
              label: "GitHub",
              url: "https://github.com/wayback09",
            },
            {
              type: 2,
              style: 5,
              label: "Modrinth",
              url: "https://modrinth.com/user/wayback",
            },
          ],
        },
      ],
    },
  }
}

async function getDiscordComponent() {
  const generated = baseTemplate()
  const projects = (await getProjects())
    .map((project) => `- [${project.title}](${project.href})`)
    .join("\n")
  // components[2] is the "## Projects" Text Display (type 10).
  generated.component.components[2].content +=
    projects.length > 0 ? projects : "_I'm still projectless..._"
  return generated
}

const DiscordEmbed = async () => {
  const generated = await getDiscordComponent()

  return (
    <>
      <link
        rel="discord:component-embed"
        type="application/json"
        href={EMBED_URL}
      />
      <script
        id="discord:component-embed"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generated),
        }}
      />
    </>
  )
}

export { DiscordEmbed, getDiscordComponent, EMBED_URL }
