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
      <h1 className="text-white text-3xl font-montserrat font-bold mb-5 mt-20">Metadata</h1>
      <div className="tabs tabs-boxed bg-transparent flex gap-10 mb-10">
        <a
          className={`tab tab-lg ${simple ? "tab-active" : ""}`}
          onClick={() => setSimple(true)}
        >
          Simple
        </a>
        <a
          className={`tab tab-lg ${simple ? "" : "tab-active"}`}
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
