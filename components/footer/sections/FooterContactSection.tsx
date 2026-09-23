import FooterSection from "@/components/footer/FooterSection"
import Discord from "@/public/discord.svg"
import Github from "@/public/github.svg"
import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Contacts = [
  {
    label: "wayback145b@gmail.com",
    href: "mailto:wayback145b@gmail.com",
    icon: <Mail className="h-auto w-4.5 text-foreground" />,
  },
  {
    label: "wayback09",
    href: "https://github.com/wayback09",
    icon: <Image src={Github} alt="" width={18} height={18} />,
  },
  {
    label: "wayback",
    href: "https://discord.com/users/1467226109237264650",
    icon: <Image src={Discord} alt="" className="h-auto w-4.5" />,
  },
]

const FooterContactSection = () => (
  <FooterSection title="Contact Me">
    <ul className="flex flex-col gap-2 text-xs">
      {Contacts.map((contact) => (
        <li key={contact.href}>
          <Link
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-max"
          >
            <div className="flex items-center gap-1 hover:text-muted-foreground">
              {contact.icon}
              {contact.label}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </FooterSection>
)

export default FooterContactSection
