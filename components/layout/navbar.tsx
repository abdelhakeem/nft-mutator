import Image from 'next/image'
import NavbarLink from "./navbarLink";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import SideDrawer from "./sideDrawer";
import {useWallet} from "@solana/wallet-adapter-react";
import ClusterPickerWeb from "./clusterPickerWeb";

const Navbar = () => {
    const {connected} = useWallet()

    return (
                <div className="flex w-full justify-between h-20 pt-8 container mx-auto" style={{overflow: "visible"}}>
                    <a className="relative w-1/3 md:w-[15%] navbar-anchor">
                        <Image src="/NFTMutator_logo.svg" layout="fill"></Image>
                    </a>

                    <div className="justify-center gap-8 items-center wallet-button-parent hidden md:flex navbar-container">
                        { connected ? <NavbarLink href="/mutate" text="mutate"></NavbarLink> : null}
                        <ClusterPickerWeb/>
                        <WalletMultiButton/>
                    </div>

                    <label htmlFor="side-drawer" className="md:hidden relative w-6 cursor-pointer">
                        <Image src="/menu.svg" layout="fill"></Image>
                    </label>
                </div>
    )
}

export default Navbar