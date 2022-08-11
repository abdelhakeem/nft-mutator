import { Metaplex, Nft } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import NftEditor from "../components/editor/nftEditor";
import Picker from "../components/mutate/Picker";
import useMetaplex from "../hooks/useMetaplex";

const TOKEN_PROGRAM_ID = new PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);

const fetchNfts = async (
  connection: Connection,
  metaplex: Metaplex,
  owner: PublicKey
) => {
  const mints = (
    await connection.getParsedTokenAccountsByOwner(owner, {
      programId: TOKEN_PROGRAM_ID,
    })
  ).value
    .map(({ account }) => account.data.parsed.info)
    .filter(
      (info) =>
        info.tokenAmount.decimals === 0 && info.tokenAmount.amount !== "0"
    )
    .map((info) => new PublicKey(info.mint));

  const nfts = await metaplex.nfts().findAllByMintList(mints).run();
  const loadedNfts: Nft[] = [];

  for (const nft of nfts) {
    if (nft) {
      loadedNfts.push(
        nft.lazy ? await metaplex.nfts().loadNft(nft).run() : nft
      );
    }
  }

  return loadedNfts;
};

const Mutate: NextPage = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const metaplex = useMetaplex();

  const [nfts, setNfts] = useState<Nft[]>([]);
  const [pickedNft, setPickedNft] = useState<Nft | null>(null);

  useEffect(() => {
    if (publicKey && metaplex) {
      (async () => {
        setNfts(await fetchNfts(connection, metaplex, publicKey));
      })();
    }
  }, [connection, publicKey, metaplex]);

  const handleUpdatePickedNft = (newPickedNft: Nft) => {
    setPickedNft(newPickedNft);
  };

  return (
    <div className="container mx-auto my-8">
      <Picker
        nfts={nfts}
        pickedNft={pickedNft}
        updatePickedNft={handleUpdatePickedNft}
      />
      {pickedNft ? <NftEditor nft={pickedNft} /> : null}
    </div>
  );
};

export default Mutate;
