////import styles from './../styles/Home.module.css'
import styles from './../styles/NFT_picker.module.css'

//nft_dataArray set type
export default function NFT_picker({ nft_dataArray }) {
    return nft_dataArray ? nft_dataArray.map((nft) => <Get_NFT post={nft} />) : null;
}

function Get_NFT({ nft_data }) {

    return (
        <div className="avatar">
            <div className="w-24 rounded">
                <img src={nft_data.url} />
            </div>
        </div>
    );
}

//nft_data:nft_array

/*

<div className={ `${styles.border} flex flex-row justify-start content-center items-center	`}>
           
        </div>

*/