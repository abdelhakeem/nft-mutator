import Navbar from "./navbar";
import {ReactElement} from "react";
import WalletContextProvider from "./walletContextProvider";

type LayoutProps = {
    children: ReactElement
}

const Layout = ({children}: LayoutProps) => {
    return (
        <WalletContextProvider>
            <div className="mx-16">
                <Navbar></Navbar>
                {children}
            </div>
        </WalletContextProvider>
        )
}

export default Layout