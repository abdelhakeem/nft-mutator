import styles from '../styles/nft_selection.module.css';
import nftDataType from '../libs/nftDataType'

const NFT_Selection = (nftData:nftDataType) => {

    return (
        <div className={styles.parentDiv + " flex flex-col justify-center gap-5"}>
            <div className="text-secondary-content text-3xl">
                <h1 className="font-montserrat font-bold">Selection</h1>
            </div>
            <div className={styles.contentDiv + " flex items-center justify-start"}>
                <div className={styles.margin20}>
                    <div className="avatar border border-solid rounded-lg">
                        <div className="w-24">
                            <img src={nftData.url} alt="NFT Image" />
                        </div>
                    </div>
                </div>

                <div className={styles.margin20 + " flex flex-col gap-1"}>
                    <div className="text-secondary-content">
                        {nftData.id}
                    </div>
                    <div className='text-secondary'>
                        {nftData.name}
                    </div>
                    <div className='text-secondary-content font-light'>
                        {nftData.info_data}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NFT_Selection