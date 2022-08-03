import NFT_selction from '../../components/layout/nft_selection';

type nft_props = {
    url: string,
    name: string,
    id: string,
    info_data: string
}

let nftData: nft_props = { url: 'https://i.imgur.com/XyqQZQz.png', name: 'nft1', id: 'nft1', info_data: 'nft1' };

const Mutate = (props:nft_props) => {
    
    return (
        <div >
            <NFT_selction></NFT_selction>
        </div>
    )
}

export default Mutate