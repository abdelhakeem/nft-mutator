const HeroSection = () => {
  return (
    <main className="overflow-hidden py-5">
      <div className="flex w-full h-screen max-h-[85vh] relative">
        <div className="w-full xl:w-1/2 lg:w-7/12 md:w-9/12 sm:w-full flex flex-col justify-center p-10 sm:p-20">
          <div className="flex flex-row">
            <h1 className="font-bold text-6xl sm:text-left text-white dark:text-[#E4E4E4] mb-8">
              Manage your&nbsp;
            </h1>
            <h1 className="font-bold text-6xl sm:text-left text-white dark:text-[#E4E4E4] mb-8">
              NFT&apos;s
            </h1>
          </div>
          <p className="font-normal text-xl text-center sm:text-left text-white dark:text-[#F9F8F8] mb-8 sm:pr-10">
            Load, display and update your metaplex NFTs metadata in few steps
          </p>
          <div>
            <button className="btn w-8/12 sm:w-fit px-6 bg-fuchsia-900 rounded-full text-lg font-normal">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
