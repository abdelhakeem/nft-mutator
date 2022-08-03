import {
  bundlrStorage,
  Metaplex,
  walletAdapterIdentity,
} from "@metaplex-foundation/js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import { selectCluster } from "../redux/features/wallet/walletSlice";
import { useAppSelector } from "./useAppSelector";

const useMetaplex = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const cluster = useAppSelector(selectCluster);

  return useMemo(() => {
    wallet
      ? Metaplex.make(connection)
          .use(walletAdapterIdentity(wallet))
          .use(
            bundlrStorage({
              address:
                cluster === "devnet"
                  ? "https://devnet.bundlr.network"
                  : undefined,
            })
          )
      : undefined;
  }, [connection, wallet, cluster]);
};

export default useMetaplex;
