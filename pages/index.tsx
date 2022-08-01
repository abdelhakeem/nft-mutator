import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import HeroSection from "../components/layout/heroSection";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const Home: NextPage = () => {
  const router = useRouter();
  const { publicKey } = useWallet()
  const walletModal = useWalletModal();
  const handleGetStarted = () => {
    if (publicKey) {
      //if user wallet is connected
      router.push("/mutate");
    } else {
      //show connect wallet modal
      walletModal.setVisible(true)
    }
  };

  return (
    <div>
      <Head>
        <title>NFT Mutator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection onHandleGetStarted={handleGetStarted} />
    </div>
  );
};

export default Home;
