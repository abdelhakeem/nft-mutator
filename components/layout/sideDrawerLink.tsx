import Link from "next/link";
import {useRouter} from "next/router";

type SideDrawerLinkProps = {
    text: string,
    href: string,
}

const SideDrawerLink = ({text, href}: SideDrawerLinkProps) => {
    const router = useRouter()
    const isActive = router.pathname == href

    return (
        <Link href={href}>
            <a className="flex cursor-pointer px-5 items-center w-full h-16 text-white font-montserrat hover:bg-gray"> {text} </a>
        </Link>
    )

}

export default SideDrawerLink