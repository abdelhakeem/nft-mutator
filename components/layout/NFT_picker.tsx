import styles from '../../styles/NFT_picker.module.css'
import nftDataType from '../../lib/nftDataType';
import dataArrayType from '../../lib/nft_dataArray'
import NFT_modal from './NFT_modal';

export default function NFT_picker({ nft_dataArray }: { nft_dataArray: dataArrayType }) {

    nft_dataArray.map((nft_data: nftDataType,index) => {
        console.log(nft_data,index);
    });
    
    if (nft_dataArray.length == 0) {
        return (
            <div className={styles.blank + " flex flex-row"}>
               
            </div>
        )
    } else {
        return (
            <div className={styles.nft_picker + " flex flex-row flex-nowrap items-center overflow-auto carousel space-x-4"}>
                {nft_dataArray ? nft_dataArray.map((nft: nftDataType,index) => <NFT_modal nft_data={nft} index={index} />) : null}
            </div>
        )
    }

}