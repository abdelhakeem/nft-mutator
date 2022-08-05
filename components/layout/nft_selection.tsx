import styles from '../../styles/nft_selection.module.css';

type nft_props = {
    url: string,
    name: string,
    id: string,
    info_data: string
}

let nftData: nft_props = { url: './nft.png', name: 'nft1', id: 'nft1#3245', info_data: 'nft1 info data in white' };
let nftData2: nft_props = { url: 'https://i.imgur.com/XyqQZQz.png', name: 'nft1', id: 'nft1#3245', info_data: 'nft1 info data in white' };


const NFT_Selection = () => {

    return (
        <div className={styles.parentDiv +" "+styles.columnParent + " " + styles.middle}>
            <div className="text-secondary-content text-xl		">
                <h1><b>Selection</b></h1>
            </div>
            <div className={styles.blank}>
            </div>
            <div className={styles.contentDiv}>
                <div className={styles.margin20}>
                    <div className={"avatar"+" "+ styles.border}>
                        <div className="w-24 rounded">
                            <img src={nftData.url} />
                        </div>
                    </div>
                </div>
                <div className={styles.columnParent +" "+styles.margin20}>
                    <div className="text-secondary-content font-bold">
                        {nftData.id}
                    </div>
                    <div className='text-secondary font-bold'>
                        {nftData.name}
                    </div>
                    <div className='text-secondary-content font-medium'>
                        {nftData.info_data}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NFT_Selection