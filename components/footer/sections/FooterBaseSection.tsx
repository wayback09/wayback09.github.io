import FooterSection from "@/components/footer/FooterSection"
import SocialLinks from "@/components/SocialLinks"
import LOGO from "@/public/logo.jpg"
import Image from "next/image"

const FooterBaseSection = () => (
  <FooterSection title="">
    <div className="group flex items-center gap-2">
      <Image
        src={LOGO}
        alt="wayback logo"
        loading="eager"
        width={32}
        height={32}
        className="h-8 w-8 rounded-full object-cover"
      />
      <span className="text-xl font-semibold">wayback</span>
    </div>
    <div className="text-xs text-muted-foreground">
      <p>&#34;LOL made this way too late guess theres no wayback&#34;</p>
      <br />
      <SocialLinks autoHide={false} loadType="eager" />
    </div>
  </FooterSection>
)
export default FooterBaseSection
