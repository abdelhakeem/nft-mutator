import Image from 'next/image'
import NavbarLink from "./navbarLink";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import SideDrawer from "./sideDrawer";
import {useWallet} from "@solana/wallet-adapter-react";
import ClusterPickerWeb from "./clusterPickerWeb";

const Navbar = () => {
    const {connected} = useWallet()

    return (
        <div className="relative drawer w-full">
            <input id="side-drawer" type="checkbox" className="drawer-toggle z-50"/>

            <div className="flex drawer-content w-full justify-between h-20 pt-8 container mx-auto !z-50" style={{overflow: "visible"}}>
                <a className="relative w-1/3 md:w-[15%]">
                    <Image src="/NFTMutator_logo.svg" layout="fill" alt='logo'></Image>
                </a>

                <div className="justify-center gap-8 items-center wallet-button-parent hidden md:flex">
                    { connected ? <NavbarLink href="/mutate" text="mutate"></NavbarLink> : null}
                    <ClusterPickerWeb/>
                    <WalletMultiButton/>
                </div>

                <label htmlFor="side-drawer" className="md:hidden relative w-6 cursor-pointer">
                    <Image src="/menu.svg" layout="fill" alt='menu'></Image>
                </label>
            </div>

            <SideDrawer/>

        </div>
    )
}

export default Navbar