import React from "react";
import bg1 from "../../assets/Image/bg1.png";
import bg2 from "../../assets/Image/bg2.png";

const Explore = () => {
  return (
    <>
      <div className="relative border-y w-full flex justify-center items-center py-14 overflow-hidden">
        <div className="absolute md:-bottom-20 bottom-0 right-0 z-10">
          <img src={bg1} alt="" />
        </div>
        <div className="absolute lg:bottom-0 top-0 lg:left-0 -left-32 z-10 lg:rotate-0 rotate-90">
          <img src={bg2} alt="" />
        </div>
        <div className="container z-30">
          <div className="flex md:flex-row flex-col gap-5 justify-between items-center mx-5">
            <div className="flex flex-col gap-3 md:w-5/6">
              <h1 className="md:text-4xl text-2xl font-semibold">
                Start Your Real Estate Journey Today
              </h1>
              <p>
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Estatein is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore
                our available properties or get in touch with our team for
                personalized assistance.
              </p>
            </div>
            <div className="md:w-fit w-full">
              <button className="border border-BgPurple bg-BgPurple text-BgWhite rounded-lg px-5 py-3 w-full">
                Browser Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
