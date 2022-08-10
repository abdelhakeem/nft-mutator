import NFT_Picker from '../components/layout/NFT_picker';
import styles from '../styles/Mutate.module.css';
import dataArrayType from '../lib/nft_dataArray';
import nftDataType from '../lib/nftDataType';

const SecondPage = () => {
  let nftData: nftDataType = { url: 'good-bye.png', name: 'nft1', id: 'nft1', info_data: 'nft1' };
  let nft_Array: dataArrayType = [nftData, nftData, nftData, nftData, nftData, nftData, nftData, nftData, nftData, nftData, nftData, nftData];
 // let nft_Array: dataArrayType = [];

  return (
    <div className={styles.marginAuto + ' flex flex-col'}>
      <div className='text-lg	font-bold	text-white'>Your NFTs</div>
      <div className={styles.contentBG}>
        <NFT_Picker nft_dataArray={nft_Array}/>
      </div>
    </div>
  )
}

export default SecondPage;