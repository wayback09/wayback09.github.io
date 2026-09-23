import LOGO from "@/public/logo.jpg"
import Image from "next/image"
import Link from "next/link"

const NavBrand = () => (
  <div className="content-center border-r px-4 text-xl">
    <Link href="/" className="group flex items-center gap-2 lg:w-36.25">
      <Image
        src={LOGO}
        alt="wayback logo"
        loading="eager"
        width={32}
        height={32}
        className="h-8 w-8 rounded-full object-cover transition-all duration-500 group-hover:rotate-90"
      />
      <span className="hidden hover:font-medium lg:block">wayback</span>
    </Link>
  </div>
)

export default NavBrand
