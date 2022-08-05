import styles from '../../styles/NFT_picker.module.css'
import nftDataType from '../../lib/nftDataType';
import dataArrayType from '../../lib/nft_dataArray'
import NFT_modal from './NFT_modal';

export default function NFT_picker({ nft_dataArray }) {

    console.log(nft_dataArray);
    let data = nft_dataArray[0];

    return (
        <div className="flex flex-row">
            {nft_dataArray ? nft_dataArray.map((nft: nftDataType) => <NFT_modal nft_data={nft} />) : null}
        </div>
    )

}
