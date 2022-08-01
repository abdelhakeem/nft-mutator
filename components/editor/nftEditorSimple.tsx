import { JsonMetadata, Nft } from "@metaplex-foundation/js";
import { useEffect, useState } from "react";
import NftEditorTextInput from "./nftEditorTextInput";

type NftEditorSimpleProps = {
  nft: Nft;
};

const NftEditorSimple = ({ nft }: NftEditorSimpleProps) => {
  const [metadata, setMetadata] = useState(null as JsonMetadata | null);

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

  return (
    <div>
      <h1 className="text-xl font-bold">Simple Editor</h1>
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
    </div>
  );
};

export default NftEditorSimple;
