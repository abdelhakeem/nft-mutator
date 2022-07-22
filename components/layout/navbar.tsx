import Image from 'next/image'
import NavbarLink from "./navbar-link";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
    return (
        <div className="flex w-full justify-between h-20">
            <a className="relative w-1/3 md:w-[15%]">
                <Image src="/NFTMutator_logo.svg" layout="fill"></Image>
            </a>
            <div className="flex gap-16 items-center wallet-button-parent">
                {/*<NavbarLink text="mutate"></NavbarLink>*/}
                <WalletMultiButton/>
                {/*<button className="text-white bg-turquoise hover:bg-pacific px-6 py-1.5 h-fit rounded-lg font-roboto">connect</button>*/}
            </div>
        </div>)
}

export default Navbar