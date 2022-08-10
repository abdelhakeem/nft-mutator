import styles from '../../styles/NFT_picker.module.css'
import nftDataType from '../../lib/nftDataType';

export default function NFT_modal(nft_data: nftDataType, index: number) {

    console.log(index);

    if (index == 0) {
        return (
            <div className={styles.test + styles.dummy + " carousel-item"}>
                <div className={styles.dummy}>
                    This is a dummy
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.test + styles.dummy + " carousel-item"}>
                <div>
                    <img src={nft_data.nft_data.url} className={styles.imgT} />
                </div>
            </div>
        );

    }


}