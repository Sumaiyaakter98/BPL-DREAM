import React from "react";
import bannerImg from "../../assets/bg-shadow.png";
import smallImage from "../../assets/banner-main.png";

const Banner = ({ onClaimCredit }) => {
  return (
    <section id="home" className="mt-5 px-4 bg-white">
      <div
        className="relative hero min-h-[460px] bg-gray-950 bg-cover bg-center rounded-3xl container mx-auto overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        {/* হালকা ডার্ক ওভারলে যাতে টেক্সট ও ছবি স্পষ্ট ফুটে ওঠে */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/80"></div>

        <div className="relative z-10 hero-content text-white text-center px-4 py-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <img
              src={smallImage}
              alt="Cricket Banner"
              className="w-44 sm:w-52 h-auto object-contain mb-5 drop-shadow-md"
            />

            <h1 className="mb-3 text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-tight">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="mb-6 text-sm sm:text-base text-gray-300 font-medium">
              Beyond Boundaries Beyond Limits
            </p>

            <div className="p-1.5 rounded-2xl border border-[#E7FE29]/80">
              <button
                type="button"
                onClick={onClaimCredit}
                className="btn bg-[#E7FE29] hover:bg-[#d8ef1d] text-gray-950 font-bold border-none rounded-xl px-6 py-3 h-auto text-sm sm:text-base shadow-sm transition cursor-pointer"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;