import { NextApiRequest, NextApiResponse } from 'next'
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const metaplex = new Metaplex(connection);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { mintAddress } = req.query;
  if (mintAddress == undefined) {
    if (req.method === 'GET') {
      const pubkey: string = req.query.pubkey as string;
      const key = new PublicKey(pubkey);
      const nfts = await metaplex.nfts().findAllByOwner(key).run();

      res.status(200).json({ response: nfts });
    }
  }
  else {
    const mintkey = new PublicKey(mintAddress);
    if (req.method === 'GET') {
      const pubkey: string = req.query.pubkey as string;
      const key = new PublicKey(pubkey);
      const nfts = await metaplex.nfts().findAllByOwner(key).run();
      for (let i = 0; i < nfts.length; i++) {
        const element = nfts[i];
        console.log(element.mintAddress.toString());
        if (element.mintAddress.toString() == mintAddress) {
          const metadata = await fetch(element.uri.toString());
          const data= await metadata.json()
          res.status(200).json({ response: data });
        }

      }
      
    }
  }
  res.status(404).json({ found:false });
}