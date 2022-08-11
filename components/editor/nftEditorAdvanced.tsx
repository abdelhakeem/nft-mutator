import { useEffect, useState } from "react";
import { Nft, JsonMetadata } from "@metaplex-foundation/js";
import dynamic from "next/dynamic";
import useMetaplex from "../../hooks/useMetaplex";
import Status, { StatusType } from "./../status";

type NftEditorAdvancedProps = {
  nft: Nft;
};

const Ace = dynamic(
  async () => {
    const ace = await import("react-ace");
    require("ace-builds/src-noconflict/mode-json");
    require("ace-builds/src-noconflict/snippets/json");
    require("ace-builds/src-noconflict/theme-monokai");
    return ace;
  },
  {
    loading: () => <p className="h-24 bg-back rounded-3xl p-2">Loading...</p>,
    ssr: false,
  }
);

const NftEditorAdvanced = ({ nft }: NftEditorAdvancedProps) => {
  const [metadata, setMetadata] = useState({} as JsonMetadata);
  const [status, setStatus] = useState("idle" as "idle" | StatusType);
  const [msg, setMsg] = useState("");
  const metaplex = useMetaplex();
  const [nftString, setNFTString] = useState(
    nft ? JSON.stringify(nft.json, null, "\t") : ""
  );

  useEffect(() => {
    setMetadata(nft.json);
  }, []);

  // the onUpdate method updates the metadata of the NFT
  const onUpdate = async () => {
    if (!metaplex) {
      setStatus("info");
      setMsg("Please connect your wallet to proceed");
      return;
    }
    console.log(metadata);
    try {
      setStatus("info");

      setMsg("Uploading metadata...");
      console.log(metadata);
      const { uri } = await metaplex.nfts().uploadMetadata(metadata).run();
      setMsg("Updating NFT...");
      const updatedNFT = await metaplex.nfts().update(nft, { uri }).run();
      setStatus("success");
      setMsg("Successfully updated NFT metadata!");
    } catch (error: any) {
      setStatus("error");
      setMsg(`Failed to update NFT metadata: ${error.message}`);
    }
  };

  const onLoad = () => {
    console.log("just loaded");
  };

  const onChange = (e: any) => {
    let lastUpdate = e;
    setMetadata(JSON.parse(lastUpdate));
    setNFTString(lastUpdate);
  };

  return (
    <div className="flex flex-col gap-10">
      {status !== "idle" ? <Status type={status} msg={msg} /> : null}
      <div className="gradient-border-wrap p-0.5 rounded-3xl">
        <Ace
          mode="json"
          theme="monokai"
          name="advanced-editor"
          onLoad={onLoad}
          onChange={onChange}
          fontSize={16}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={nftString}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
            useWorker: false,
          }}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={onUpdate}
          className="button-violet-glow bg-violet rounded-full font-montserrat px-5 py-2 text-white w-52"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default NftEditorAdvanced;
