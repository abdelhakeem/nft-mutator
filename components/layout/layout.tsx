import Navbar from "./navbar";
import {ReactElement} from "react";
import WalletContextProvider from "./walletContextProvider";
import SideDrawer from "./sideDrawer";

type LayoutProps = {
    children: ReactElement
}

const Layout = ({children}: LayoutProps) => {
    return (
        <WalletContextProvider>
            <div className="drawer w-full">
                <input id="side-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <Navbar></Navbar>
                    {children}
                </div>
                <SideDrawer/>
            </div>
        </WalletContextProvider>
        )
}

export default Layout