import styles from '../../styles/NFT_picker.module.css'
import nftDataType from '../../lib/nftDataType';

export default function NFT_modal(nft_data: nftDataType) {

    return (
        <div className={styles.test + styles.dummy + " carousel-item"}>
            <div>
                <img src={nft_data.nft_data.url} alt="NFT Modal" className={styles.imgT} />
            </div>
        </div>
    );

}