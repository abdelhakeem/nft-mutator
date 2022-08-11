/* eslint-disable @next/next/no-img-element */

import { Nft } from "@metaplex-foundation/js";

type PickerProps = {
  nfts: Nft[];
  pickedNft: Nft | null;
  updatePickedNft: Function;
};

const Picker = ({ nfts, pickedNft, updatePickedNft }: PickerProps) => {
  return (
    <div>
      <ul className="flex flex-row justify-center gap-2 overflow-x-scroll">
        {nfts.map((nft) => (
          <li
            key={nft.mint.address.toBase58()}
            className={
              pickedNft?.mint.address.equals(nft.mint.address)
                ? "opacity-50 gradient-border-wrap p-0.5"
                : ""
            }
            onClick={() => updatePickedNft(nft)}
          >
            <img
              src={nft.json?.image}
              alt={nft.name}
              className="max-w-[100px] max-h-[100px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Picker;
