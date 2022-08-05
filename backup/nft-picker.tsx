import styles from '../../styles/NFT_picker.module.css'
import nftDataType from '../../lib/nftDataType';
import dataArrayType from '../../lib/nft_dataArray'
import NFT_modal from './NFT_modal';

export default function NFT_picker({nft_dataArray}:dataArrayType) {

let data = nft_dataArray[0];

    return (
        <NFT_modal nft_data={data}/>
    )
    //return nft_dataArray ? nft_dataArray.map((nft:nftDataType) => <Get_NFT nft_data={nft} />) : null;
}

/*
function Get_NFT(nft_data:nftDataType) {

    console.log("nft_data: ", nft_data);

    return (
        
            <div className={`${styles.test} avatar "`}>
                <div>
                    <img src={nft_data.url} className={styles.imgT}/>
                </div>
            </div>

    );
}
*/