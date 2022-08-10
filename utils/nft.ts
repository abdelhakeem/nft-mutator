import { Nft,LazyNft } from "@metaplex-foundation/js";
import { NextApiRequest, NextApiResponse } from 'next'
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const metaplex = new Metaplex(connection);



const fetchNftsByUpdateAuthority = async (updateAuthority: PublicKey): Promise<Nft[]> => {

    let nfts = <Nft[]> await metaplex.nfts().findAllByUpdateAuthority(updateAuthority).run();
    return nfts;
}
const fetchNftsByOwner = async (Owner: PublicKey): Promise<Nft[]> => {
    
    let nfts = <Nft[]> await metaplex.nfts().findAllByOwner(Owner).run();
    return nfts;
}



const fetchNftsByOwnerWithAuthority = async (Owner: PublicKey): Promise<Nft[]> => {

    let authorityNfts=await fetchNftsByUpdateAuthority(Owner);
    let ownerOfNfts=await fetchNftsByOwner(Owner);
    //Where authorityNfts and ownerOfNfts overlap the owner has both authority and ownership and therefore
    //Should not be shown in the area of owning it but cant edit it.
    
    let overlap = authorityNfts.filter(val => !ownerOfNfts.includes(val));
    return overlap;
    
}
