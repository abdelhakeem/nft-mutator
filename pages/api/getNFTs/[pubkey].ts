import { NextApiRequest, NextApiResponse } from 'next'
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const metaplex = new Metaplex(connection);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const pubkey: string = req.query.pubkey as string;
    const key = new PublicKey(pubkey);
    const nfts = await metaplex.nfts().findAllByOwner(key).run();

    res.status(200).json({nfts:nfts});
  }
}