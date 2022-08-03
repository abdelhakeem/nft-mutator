import { Nft } from "@metaplex-foundation/js";
import { useState } from "react";
import NftEditorSimple from "./nftEditorSimple";
import dynamic from "next/dynamic";

const NFTEditorAdvancedWithNoSSR = dynamic(
    () => import('./nftEditorAdvanced'),
    { ssr: false }
)

type NftEditorProps = {
  nft: Nft;
};

const NftEditor = ({ nft }: NftEditorProps) => {
  const [simple, setSimple] = useState(true);

  return (
    <div className="container mx-auto">
      <div className="tabs">
        <a
          className={`tab tab-lg tab-lifted ${simple ? "tab-active" : ""}`}
          onClick={() => setSimple(true)}
        >
          Simple
        </a>
        <a
          className={`tab tab-lg tab-lifted ${simple ? "" : "tab-active"}`}
          onClick={() => setSimple(false)}
        >
          Advanced
        </a>
      </div>
      <div className="mt-4">
        {simple ? (
          <NftEditorSimple nft={nft} />
        ) : (
          <NFTEditorAdvancedWithNoSSR nft={nft}/>
        )}
      </div>
    </div>
  );
};

export default NftEditor;
