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
            <div className="h-full gradient-border-wrap hover:pb-0.5">
                <a className="w-32 flex cursor-pointer justify-center items-center h-full bg-back text-white font-montserrat"> {text} </a>
            </div>
        </Link>
       )

}

export default NavbarLink