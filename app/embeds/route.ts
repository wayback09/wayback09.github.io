import { getDiscordComponent } from "@/lib/discord"

export const dynamic = "force-static"

export async function GET() {
  const component = await getDiscordComponent()
  return Response.json(component, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=600",
    },
  })
}
