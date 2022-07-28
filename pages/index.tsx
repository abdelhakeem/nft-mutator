import type { NextPage } from "next";
import Head from 'next/head'
import HeroSection from "../components/layout/heroSection";

const Home: NextPage = () => {
  return (
    <div>
         <Head>
        <title>NFT Mutator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </div>
  );
};

export default Home;
