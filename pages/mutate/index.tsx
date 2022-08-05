import NFT_selction from '../../components/layout/nft_selection';
//import {nftDataType} from '../../types/nftDataType.ts';

let nftData = { url: './nft.png', name: 'Nft1', id: 'Nft1#3245', info_data: 'some info data in white' };

const Mutate = () => {
    
    return (
        <div >
            <NFT_selction nftData={nftData}/>
        </div>
    )
}

export default Mutate