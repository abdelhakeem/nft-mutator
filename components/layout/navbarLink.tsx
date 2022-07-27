import Link from "next/link";
import {useRouter} from "next/router";

type NavbarLinkProps = {
    text: string,
    href: string,
}

const NavbarLink = ({text, href}: NavbarLinkProps) => {
    const router = useRouter()
    const isActive = router.pathname == href

    return (
        <Link href={href}>
            <a className="w-32 flex cursor-pointer justify-center items-center h-full bg-back text-white transition-all duration-100
             font-montserrat nav-link hover:font-bold"> {text} </a>
        </Link>
    )

}

export default NavbarLink