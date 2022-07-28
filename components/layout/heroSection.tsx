const HeroSection = () => {
  return (
    <main className="overflow-hidden py-5">
      <div className="flex w-full h-screen max-h-[85vh] relative">
        <div className="w-full xl:w-1/2 lg:w-7/12 md:w-9/12 sm:w-full flex flex-col justify-center p-10 sm:p-20">
          <h1 className="font-bold text-2xl sm:text-left text-[#3F3D56] dark:text-[#E4E4E4] mb-8">
            Manage your NFT
          </h1>
          <p className="font-normal text-xl text-center sm:text-left text-[rgb(0,0,0)] dark:text-[#F9F8F8] mb-8 sm:pr-10">
            Load, display and update your metaplex NFTs metadata in few steps
          </p>
          <div>
          <button className="btn w-8/12 sm:w-fit btn-secondary px-6 text-lg font-normal">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
