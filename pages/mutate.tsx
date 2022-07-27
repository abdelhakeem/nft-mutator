import NFT_Picker from '../components/nft_picker'

type nft_props ={
  url:string,
  name:string,
  id:string,
  info_data:string
}

type nft_array = Array<nft_props>;

let nftData:nft_props = {url:'https://i.imgur.com/XyqQZQz.png',name:'nft1',id:'nft1',info_data:'nft1'}; 
let nft_Array = [nftData,nftData];

const SecondPage = () => {
  return (    
    <div>
    <NFT_Picker nft_Arr={nft_Array}/>
 
    </div>
  )
}

export default SecondPage
