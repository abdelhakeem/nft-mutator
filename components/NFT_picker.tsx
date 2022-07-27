import styles from './../styles/NFT_picker.module.css'

export default function NFT_picker({ nft_dataArray }) {
    return nft_dataArray ? nft_dataArray.map((nft) => <Get_NFT nft_data={nft} />) : null;
}

function Get_NFT({ nft_data }) {

    console.log(typeof nft_data);
    console.log("nft_data: ", nft_data);

    return (
        
            <div className={`${styles.test} avatar"`}>
                <div>
                    <img src={nft_data.url} className={styles.imgT}/>
                </div>
            </div>

    );
}
