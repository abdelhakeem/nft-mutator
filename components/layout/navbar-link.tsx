type NavbarLinkProps = {
    text: string
}

const NavbarLink = ({text}: NavbarLinkProps) => {
    return <div className="h-full gradient-border-wrap hover:pb-0.5"><p
        className="w-32 flex justify-center items-center h-full bg-back text-white font-montserrat"> {text} </p>
    </div>
}

export default NavbarLink