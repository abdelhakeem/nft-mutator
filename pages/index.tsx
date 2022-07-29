import type { NextPage } from 'next'
import { useWallet } from '@solana/wallet-adapter-react'
import { useRouter } from 'next/router'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'

const Home: NextPage = () => {
  const { publicKey } = useWallet()
  const walletModal = useWalletModal()
  const router = useRouter()

  const handleGetStarted = () => {
    if (publicKey) {
      // If user's wallet is connected navigate to user NFT's
      router.push('/nft')
    } else {
      // Show connect wallet modal
      walletModal.setVisible(true)
    }
  }

  return (
    <div className='absolute top-0 left-0 w-full h-full overflow-hidden flex'>
      {/* Landing Page Bg Circles */}
      <div className='absolute top-20 left-0 blur-2xl -z-5'>
        <svg width="94" height="184" viewBox="0 0 94 184" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-111.367 148.86C-109.31 101.139 -117.789 47.4957 -97.7294 21.6167C-77.67 -4.26225 -29.0718 -2.37663 6.11768 8.24788C41.3357 18.4833 63.5142 37.3265 78.1627 68.1271C93.0102 98.6676 100.725 140.645 82.6202 188.947C64.515 237.248 20.6178 291.484 -20.8556 307.722C-62.1586 324.09 -100.839 302.199 -113.613 270.354C-126.756 238.64 -113.793 196.711 -111.367 148.86Z" fill="#FCD758"/>
        </svg>
      </div>
      <div className='absolute top-3/4 left-3/4  blur-2xl -z-5 center-circle'>
        <svg width="344" height="264" viewBox="0 0 344 264" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M197.174 34.291C248.551 48.2576 309.082 52.2731 332.07 80.359C355.058 108.445 340.503 160.601 319.892 196.09C299.697 231.704 273.495 251.083 236.223 259.367C199.184 267.93 151.539 265.957 103.659 234.471C55.7787 202.985 8.07961 142.113 1.08795 93.2122C-6.08785 44.4645 27.6755 7.96809 65.6006 1.97125C103.478 -4.45769 145.749 19.8922 197.174 34.291Z" fill="#EB54BC" fillOpacity="0.8"/>
        </svg>
      </div>
      <div className='absolute top-0 right-0 -z-5 hero-right-circle'>
        <svg width="767" height="787" viewBox="0 0 767 787" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="575.723" cy="211.723" r="575" transform="rotate(-20.9744 575.723 211.723)" fill="url(#paint0_radial_1_190)"/>
        <defs>
        <radialGradient id="paint0_radial_1_190" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.722582 326.723) rotate(-5.99299) scale(690.046)">
        <stop stopColor="#FCD757"/>
        <stop offset="0.35068" stopColor="#02DC85" stopOpacity="0.8"/>
        <stop offset="0.711065" stopColor="#22969C" stopOpacity="0.6"/>
        <stop offset="1" stopColor="#EB54BC" stopOpacity="0.1"/>
        </radialGradient>
        </defs>
        </svg>
      </div>
      <div className='absolute top-20 right-1/3 blur-2xl -z-5'>
        <svg width="344" height="264" viewBox="0 0 344 264" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M197.174 34.2911C248.551 48.2577 309.082 52.2732 332.07 80.3591C355.058 108.445 340.503 160.602 319.892 196.09C299.697 231.704 273.495 251.083 236.223 259.367C199.184 267.93 151.539 265.957 103.659 234.471C55.7787 202.985 8.07961 142.113 1.08795 93.2123C-6.08785 44.4646 27.6755 7.96818 65.6006 1.97134C103.478 -4.4576 145.749 19.8923 197.174 34.2911Z" fill="#02DC85" fillOpacity="0.8"/>
        </svg>
      </div> 
      <div className='absolute bottom-0 left-0 -z-5 hero-left-circle'>
        <svg width="699" height="415" viewBox="0 0 699 415" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M621.36 287.977C668.44 401.555 694.204 563.079 698.652 772.549C703.1 982.019 621.797 1028.85 454.744 913.042C287.69 797.234 110.662 698.833 -76.3402 617.84C-263.342 536.847 -289.828 401.858 -155.798 212.873C-21.7677 23.8876 129.496 -39.2356 297.994 23.5029C466.491 86.2414 574.28 174.4 621.36 287.977Z" fill="url(#paint0_radial_1_186)"/>
        <defs>
        <radialGradient id="paint0_radial_1_186" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(546.811 180.364) rotate(165.632) scale(650.76 431.583)">
        <stop stopColor="#EB54BC"/>
        <stop offset="0.489583" stopColor="#7C1DC1"/>
        <stop offset="1" stopColor="#67D8DE" stopOpacity="0"/>
        </radialGradient>
        </defs>
        </svg>
      </div>
      <div className='absolute bottom-20 left-80 blur-2xl -z-5'>
          <svg width="344" height="258" viewBox="0 0 344 258" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M197.174 34.2911C248.551 48.2577 309.082 52.2732 332.07 80.3591C355.058 108.445 340.503 160.602 319.892 196.09C299.697 231.704 273.495 251.083 236.223 259.367C199.184 267.93 151.539 265.957 103.659 234.471C55.7787 202.985 8.07961 142.113 1.08795 93.2123C-6.08785 44.4646 27.6755 7.96818 65.6006 1.97134C103.478 -4.4576 145.749 19.8923 197.174 34.2911Z" fill="#EB54BC" fillOpacity="0.8"/>
          </svg>
      </div>
      {/* Landing Page backdrop */}
      <div className='absolute top-0 left-0 w-full h-full backdrop-bg -z-4'></div>
      {/* Landing Page Content */}
      <div className='relative z-10 self-center ml-2 sm:ml-6 md:ml-15 lg:ml-40 p-5'>
        <h1 className='font-bold text-white text-7xl'>Manage your <span className='landing-hero-text'>NFT</span>&apos;s</h1>
        <p className='font-normal text-2xl my-10 max-w-xl'>Load, display and update your metaplex NFT&apos;s metadata in few steps</p>
        <button onClick={handleGetStarted} className="btn btn-wide btn-active btn-primary rounded-full">Get Started</button>
      </div>
    </div>
  )
}

export default Home
