import NFT_selction from '../../components/layout/nft_selection';

type nft_props = {
    url: string,
    name: string,
    id: string,
    info_data: string
}

let nftData: nft_props = { url: './nft.png', name: 'Nft1', id: 'Nft1#3245', info_data: 'some info data in white' };

const Mutate = () => {
    
    return (
        <div >
            <NFT_selction nftData={nftData}/>
        </div>
    )
}

export default Mutate