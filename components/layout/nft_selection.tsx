import styles from '../../styles/nft_selection.module.css';

type nft_props = {
    url: string,
    name: string,
    id: string,
    info_data: string
}

let nftData: nft_props = { url: 'https://i.imgur.com/XyqQZQz.png', name: 'nft1', id: 'nft1#3245', info_data: 'nft1 info data in white' };

const NFT_Selection = () => {

    return (
        <div className={styles.parentDiv +" "+styles.columnParent + " " + styles.middle}>
            <div className={styles.margin20}>
                <h1><b>Selection</b></h1>
            </div>
            <div className={styles.blank}>
            </div>
            <div className={styles.contentDiv}>
                <div className={styles.margin20}>
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={nftData.url} />
                        </div>
                    </div>
                </div>
                <div className={styles.columnParent +" "+styles.margin20}>
                    <div>
                        <h2>{nftData.id}</h2>
                    </div>
                    <div>
                        {nftData.name}
                    </div>
                    <div>
                        {nftData.info_data}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NFT_Selection