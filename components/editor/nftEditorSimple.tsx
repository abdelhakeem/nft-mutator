import { JsonMetadata, Nft } from "@metaplex-foundation/js";
import { FormEventHandler, useEffect, useState } from "react";
import useMetaplex from "../../hooks/useMetaplex";
import Status, { StatusType } from "../status";
import NftEditorImageInput from "./nftEditorImageInput";
import NftEditorTextInput from "./nftEditorTextInput";

type NftEditorSimpleProps = {
  nft: Nft;
};

const NftEditorSimple = ({ nft }: NftEditorSimpleProps) => {
  const [metadata, setMetadata] = useState(null as JsonMetadata | null);
  const [status, setStatus] = useState("idle" as "idle" | StatusType);
  const [msg, setMsg] = useState("");
  const metaplex = useMetaplex();

  useEffect(() => {
    setMetadata(nft.json);
  }, [nft]);

  if (!metadata) {
    return (
      <div>
        <h1 className="text-center">Metadata not loaded</h1>
      </div>
    );
  }

  const handleUpdateMetadata = (newMetadata: JsonMetadata) => {
    setMetadata(newMetadata);
  };

  const submitHandler: FormEventHandler = async (e) => {
    e.preventDefault();

    if (!metaplex) {
      setStatus("info");
      setMsg("Please connect your wallet to proceed");
      return;
    }

    try {
      setStatus("info");
      setMsg("Uploading metadata...");
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

  return (
    <form onSubmit={submitHandler}>
      {status !== "idle" ? <Status type={status} msg={msg} /> : null}
      <NftEditorTextInput
        field="name"
        type="text"
        label="Name"
        metadata={metadata}
        updateMetadata={handleUpdateMetadata}
      />
      <NftEditorTextInput
        field="symbol"
        type="text"
        label="Symbol"
        metadata={metadata}
        updateMetadata={handleUpdateMetadata}
      />
      <NftEditorTextInput
        field="description"
        type="text"
        label="Description"
        metadata={metadata}
        updateMetadata={handleUpdateMetadata}
      />
      <NftEditorTextInput
        field="seller_fee_basis_points"
        type="number"
        label="Seller Fee Basis Points"
        metadata={metadata}
        updateMetadata={handleUpdateMetadata}
      />
      <NftEditorTextInput
        field="external_url"
        type="text"
        label="External URL"
        metadata={metadata}
        updateMetadata={handleUpdateMetadata}
      />
      <NftEditorImageInput
        field="image"
        label="Image"
        metadata={metadata}
        updateMetadata={handleUpdateMetadata}
      />
      <div className="flex flex-row justify-center mt-8">
        <button className="btn bg-violet text-white text-xl font-roboto capitalize rounded-full px-12">
          Update
        </button>
      </div>
    </form>
  );
};

export default NftEditorSimple;
