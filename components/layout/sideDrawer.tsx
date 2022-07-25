import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import {useWallet} from "@solana/wallet-adapter-react";
import SideDrawerLink from "./sideDrawerLink";

const SideDrawer = () => {
    const {connected} = useWallet()
    return (
        <div className="drawer-side wallet-button-parent">
            <label htmlFor="side-drawer" className="drawer-overlay"></label>
            <ul className="gap-8 menu p-4 overflow-y-auto w-80 bg-base-100">
                <WalletMultiButton/>
                {connected ? <SideDrawerLink text="mutate" href="/mutate" /> : null}
            </ul>
        </div>
    )
}

export default SideDrawer