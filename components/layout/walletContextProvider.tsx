import {ReactElement, useMemo} from "react";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import {clusterApiUrl} from "@solana/web3.js";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-phantom";
import {GlowWalletAdapter} from "@solana/wallet-adapter-glow";
import {SlopeWalletAdapter} from "@solana/wallet-adapter-slope";
import {SolflareWalletAdapter} from "@solana/wallet-adapter-wallets";
import { selectCluster } from "../../redux/features/wallet/walletSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
require('@solana/wallet-adapter-react-ui/styles.css');

type WalletContextProviderProps = {
    children: ReactElement
}

const WalletContextProvider = ({children}: WalletContextProviderProps) => {
    const cluster = useAppSelector(selectCluster)
    const endpoint = clusterApiUrl(cluster)

    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new GlowWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter(),
    ], [cluster])

    const onError = (error: any) => {console.log(error)}

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
       )
}

export default WalletContextProvider
