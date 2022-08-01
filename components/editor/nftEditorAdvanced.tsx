import { Nft } from "@metaplex-foundation/js";

type NftEditorAdvancedProps = {
  nft: Nft;
};

const NftEditorAdvanced = ({ nft }: NftEditorAdvancedProps) => {
  return (
    <div>
      <h1 className="text-xl font-bold">Advanced Editor</h1>
    </div>
  )
};

export default NftEditorAdvanced;
