import NFT_Picker from '../components/NFT_picker'
import styles from './../styles/NFT_picker.module.css'

type nft_props = {
  url: string,
  name: string,
  id: string,
  info_data: string
}

type nft_array = Array<nft_props>;

let nftData: nft_props = { url: 'https://i.imgur.com/XyqQZQz.png', name: 'nft1', id: 'nft1', info_data: 'nft1' };
let nft_Array: nft_array = [nftData, nftData, nftData, nftData];

const SecondPage = () => {
  return (
    <main className={`${styles.border} justify-start content-center items-center	`}>
      <NFT_Picker nft_dataArray={nft_Array} />
    </main>
  )
}

export default SecondPage
