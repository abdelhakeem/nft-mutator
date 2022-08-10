import NFT_Picker from '../components/layout/NFT_picker';
import styles from '../styles/Mutate.module.css';
import dataArrayType from '../lib/nft_dataArray';
import nftDataType from '../lib/nftDataType';

const SecondPage = () => {
  let nftData:nftDataType = { url: 'https://i.imgur.com/XyqQZQz.png', name: 'nft1', id: 'nft1', info_data: 'nft1' };
  let nft_Array:dataArrayType = [nftData, nftData, nftData, nftData];

  return (
    <main className={styles.marginAuto + " flex flex-row justify-start content-center items-center "}>
      <NFT_Picker nft_dataArray={nft_Array} />
    </main>
  )
}

export default SecondPage;