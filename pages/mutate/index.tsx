import NFT_selction from '../../components/layout/nft_selection';
import nftDataType from '../../libs/nftDataType';


const Mutate = () => {
    let nftD:nftDataType = { url: './nft.png', name: 'Nft1', id: 'Nft1#3245', info_data: 'some info data in white' };

    return (
        <div >
            <NFT_selction {...nftD}/>
        </div>
    )
}

export default Mutate