import styles from '../../styles/nft_selection.module.css';

//import nftDataType from '../../types/nftDataTypes.tsx';
//let nftData:nftDataType;

const NFT_Selection = ({nftData}) => {

    return (
        <div className={styles.parentDiv +" " + styles.middle + " " + "flex flex-col justify-center	"}>
            <div className="text-secondary-content text-xl">
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