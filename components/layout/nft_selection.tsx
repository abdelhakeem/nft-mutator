import styles from '../../styles/nft_selection.module.css';

type nft_props = {
    url: string,
    name: string,
    id: string,
    info_data: string
}

//let nftData2: nft_props = { url: 'https://i.imgur.com/XyqQZQz.png', name: 'nft1', id: 'nft1#3245', info_data: 'nft1 info data in white' };
let nftData:nft_props;
//className={styles.parentDiv +" "+ styles.columnParent + " " + styles.middle}
const NFT_Selection = ({nftData}) => {

    return (
        <div className={styles.parentDiv +" " + styles.middle + " " + "flex flex-col justify-center	"}>
            <div className="text-secondary-content text-xl		">
                <h1><b>Selection</b></h1>
            </div>
            <div className={styles.blank}>
            </div>
            <div className={styles.contentDiv + " flex flex-row items-center justify-start		"}>
                <div className={styles.margin20}>
                    <div className="avatar border border-solid ">
                        <div className="w-24 rounded">
                            <img src={nftData.url} />
                        </div>
                    </div>
                </div>
                <div className={styles.margin20 + " flex flex-col"}>
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