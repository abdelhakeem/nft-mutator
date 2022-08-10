import { Nft } from "@metaplex-foundation/js";

type NftEditorSimpleProps = {
  nft: Nft;
};

const NftEditorSimple = ({ nft }: NftEditorSimpleProps) => {
  return (
    <div>
      <h1 className="text-xl font-bold">Simple Editor</h1>
    </div>
  )
};

export default NftEditorSimple;
