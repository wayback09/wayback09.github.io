import FooterSection from "@/components/footer/FooterSection"
import { GenericLink } from "@/components/ui/links/GenericLink"
import { getProjects } from "@/lib/projects"

const Projects = async () => {
  const projects = await getProjects()

  if (projects.length === 0) {
    return <li>I'm still projectless...</li>
  }

  return (
    <>
      {projects.map((project) => (
        <li key={project.slug}>
          <GenericLink href={project.href} isExternal text={project.title} />
        </li>
      ))}
    </>
  )
}

const FooterProjectsSection = () => (
  <FooterSection title="Projects">
    <ul className="flex flex-col gap-2 text-xs">
      <Projects />
    </ul>
  </FooterSection>
)

export default FooterProjectsSection
