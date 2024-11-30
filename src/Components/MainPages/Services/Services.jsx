import React from "react";
import Explore from "../../Common/Explore";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import AbstractDesign3 from "../../../assets/Image/AbstractDesign3.png";
import icon1 from "../../../assets/Image/icon1.png";
import icon2 from "../../../assets/Image/icon2.png";
import icon3 from "../../../assets/Image/icon3.png";
import icon4 from "../../../assets/Image/icon4.png";
import icon5 from "../../../assets/Image/icon5.png";
import icon6 from "../../../assets/Image/icon6.png";
import icon7 from "../../../assets/Image/icon7.png";
import icon8 from "../../../assets/Image/icon8.png";
import icon9 from "../../../assets/Image/icon9.png";
import icon10 from "../../../assets/Image/icon10.png";
import icon11 from "../../../assets/Image/icon11.png";
import icon12 from "../../../assets/Image/icon12.png";
import icon13 from "../../../assets/Image/icon13.png";
import icon14 from "../../../assets/Image/icon14.png";
import { FaGraduationCap, FaStar } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoSparklesSharp } from "react-icons/io5";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center md:gap-20 gap-10 w-full">
      <div className="flex flex-col border-b w-full justify-center items-center ">
        <div className="container w-full py-14">
          <div className="flex flex-col mx-5">
            <h1 className="md:text-4xl text-2xl font-bold mb-4">
              Elevate Your Real Estate Experience
            </h1>
            <p className="text-gray-400 max-w-3xl">
              Welcome to Estatein, where your real estate aspirations meet
              expert guidance. Explore our comprehensive range of services, each
              designed to cater to your unique needs and dreams.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 mx-5 md:p-6 p-3 shadow-custom w-full">
          <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
            <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
              <HiOutlineArrowUpRight />
            </span>
            <img src={icon1} alt="" className="md:w-auto w-16" />
            <span className="text-sm">Find Your Dream Home</span>
          </div>
          <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
            <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
              <HiOutlineArrowUpRight />
            </span>
            <img src={icon2} alt="" className="md:w-auto w-16" />
            <span className="text-sm">Unlock Property Value</span>
          </div>
          <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
            <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
              <HiOutlineArrowUpRight />
            </span>
            <img src={icon3} alt="" className="md:w-auto w-16" />
            <span className="text-sm">Effortless Property Management</span>
          </div>
          <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
            <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
              <HiOutlineArrowUpRight />
            </span>
            <img src={icon4} alt="" className="md:w-auto w-16" />
            <span className="text-sm">
              Smart Investments, Informed Decisions
            </span>
          </div>
        </div>
      </div>

      <div className="container w-full">
        <div className="flex flex-col justify-center items-center md:gap-20 gap-10 w-full">
          <div className="flex flex-col md:gap-14 gap-10 justify-center mx-5">
            <div className="flex flex-col gap-5">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="font-semibold md:text-4xl text-2xl">
                Unlock Property Value
              </h1>
              <p>
                Selling your property should be a rewarding experience, and at
                Estatein, we make sure it is. Our Property Selling Service is
                designed to maximize the value of your property, ensuring you
                get the best deal possible. Explore the categories below to see
                how we can help you at every step of your selling journey
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <img src={icon10} alt="" className="md:w-16 w-14" />
                    <span className="md:text-xl text-lg font-semibold">
                      Valuation Mastery
                    </span>
                  </div>
                  <span>
                    Discover the true worth of your property with our expert
                    valuation services.
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <img src={icon5} alt="" className="md:w-16 w-14" />
                    <span className="md:text-xl text-lg font-semibold">
                      Strategic Marketing
                    </span>
                  </div>
                  <span>
                    Selling a property requires more than just a listing; it
                    demands a strategic marketing approach.
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <img src={icon9} alt="" className="md:w-16 w-14" />
                    <span className="md:text-xl text-lg font-semibold">
                      Negotiation Wizardry
                    </span>
                  </div>
                  <span>
                    Negotiating the best deal is an art, and our negotiation
                    experts are masters of it.
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5">
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <img src={icon6} alt="" className="md:w-16 w-14" />
                    <span className="md:text-xl text-lg font-semibold">
                      Closing Success
                    </span>
                  </div>
                  <span>
                    A successful sale is not complete until the closing. We
                    guide you through the intricate closing process.
                  </span>
                </div>
                <div
                  className="col-span-2 flex flex-col gap-4 p-5 border rounded-xl md:mt-0 mt-5"
                  style={{
                    backgroundImage: `url(${AbstractDesign3})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex md:flex-row flex-col w-full md:justify-between gap-4">
                    <span className="md:text-xl text-lg font-semibold">
                      Unlock the Value of Your Property Today
                    </span>
                    <button className="border border-BgPurple text-BgPurple rounded-lg px-5 py-3 bg-BgLightPurple md:w-fit w-full">
                      Learn More
                    </button>
                  </div>
                  <span>
                    Ready to unlock the true value of your property? Explore our
                    Property Selling Service categories and let us help you
                    achieve the best deal possible for your valuable asset.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:gap-14 gap-10 justify-center mx-5">
            <div className="flex flex-col gap-5">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="font-semibold md:text-4xl text-2xl">
                Effortless Property Management
              </h1>
              <p>
                Owning a property should be a pleasure, not a hassle. Estatein's
                Property Management Service takes the stress out of property
                ownership, offering comprehensive solutions tailored to your
                needs. Explore the categories below to see how we can make
                property management effortless for you
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <img src={icon11} alt="" className="md:w-16 w-14" />
                    <span className="md:text-xl text-lg font-semibold">
                      Tenant Harmony
                    </span>
                  </div>
                  <span>
                    Our Tenant Management services ensure that your tenants have
                    a smooth and reducing vacancies.
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <img src={icon7} alt="" className="md:w-16 w-14" />
                    <span className="md:text-xl text-lg font-semibold">
                      Maintenance Ease
                    </span>
                  </div>
                  <span>
                    Say goodbye to property maintenance headaches. We handle all
                    aspects of property upkeep.
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <img src={icon8} alt="" className="md:w-16 w-14" />
                    <span className="md:text-xl text-lg font-semibold">
                      Financial Peace of Mind
                    </span>
                  </div>
                  <span>
                    Managing property finances can be complex. Our financial
                    experts take care of rent collection
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5">
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <img src={icon12} alt="" className="md:w-16 w-14" />
                    <span className="md:text-xl text-lg font-semibold">
                      Legal Guardian
                    </span>
                  </div>
                  <span>
                    Stay compliant with property laws and regulations
                    effortlessly.
                  </span>
                </div>
                <div
                  className="col-span-2 flex flex-col gap-4 p-5 border rounded-xl md:mt-0 mt-5"
                  style={{
                    backgroundImage: `url(${AbstractDesign3})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex md:flex-row flex-col w-full md:justify-between gap-4">
                    <span className="md:text-xl text-lg font-semibold">
                      Experience Effortless Property Management
                    </span>
                    <button className="border border-BgPurple text-BgPurple rounded-lg px-5 py-3 bg-BgLightPurple md:w-fit w-full">
                      Learn More
                    </button>
                  </div>
                  <span>
                    Ready to experience hassle-free property management? Explore
                    our Property Management Service categories and let us handle
                    the complexities while you enjoy the benefits of property
                    ownership.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mx-5">
            <div className="flex flex-col gap-5 justify-center">
              <div className="flex flex-col gap-5">
                <span className="flex gap-1 items-center justify-start w-full">
                  <IoSparklesSharp className="text-3xl" />
                </span>
                <h1 className="font-semibold md:text-4xl text-2xl">
                  Smart Investments, Informed Decisions
                </h1>
                <p>
                  Building a real estate portfolio requires a strategic
                  approach. Estatein's Investment Advisory Service empowers you
                  to make smart investments and informed decisions.
                </p>
              </div>
              <div
                className="col-span-2 flex flex-col gap-4 p-5 border rounded-xl h-full"
                style={{
                  backgroundImage: `url(${AbstractDesign3})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left",
                }}
              >
                <div className="flex md:flex-row flex-col w-full md:justify-between gap-4">
                  <span className="md:text-xl text-lg font-semibold">
                    Experience Effortless Property Management
                  </span>
                </div>
                <span>
                  Ready to experience hassle-free property management? Explore
                  our Property Management Service categories and let us handle
                  the complexities while you enjoy the benefits of property
                  ownership.
                </span>
                <div className="flex justify-center items-center">
                  <button className="border border-BgPurple text-BgPurple rounded-lg px-5 py-3 bg-BgLightPurple w-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-2  grid gap-5">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col gap-5 shadow-xl rounded-xl p-6">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <span className="">
                      <img src={icon10} alt="" className="w-14" />
                    </span>
                    <span className="md:text-xl text-lg font-semibold">
                      Market Insight
                    </span>
                  </div>
                  <span>
                    Stay ahead of market trends with our expert Market Analysis.
                    We provide in-depth insights into real estate market
                    conditions
                  </span>
                </div>
                <div className="flex flex-col gap-5 shadow-xl rounded-xl p-6">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <span className="">
                      <img src={icon13} alt="" className="w-14" />
                    </span>
                    <span className="md:text-xl text-lg font-semibold">
                      ROI Assessment
                    </span>
                  </div>
                  <span>
                    Make investment decisions with confidence. Our ROI
                    Assessment services evaluate the potential returns on your
                    investments
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col gap-5 shadow-xl rounded-xl p-6">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <span className="">
                      <img src={icon14} alt="" className="w-14" />
                    </span>
                    <span className="md:text-xl text-lg font-semibold">
                      Customized Strategies
                    </span>
                  </div>
                  <span>
                    Every investor is unique, and so are their goals. We develop
                    Customized Investment Strategies tailored to your specific
                    needs
                  </span>
                </div>
                <div className="flex flex-col gap-5 shadow-xl rounded-xl p-6">
                  <div className="flex md:gap-4 gap-2 items-center">
                    <span className="">
                      <img src={icon12} alt="" className="w-14" />
                    </span>
                    <span className="md:text-xl text-lg font-semibold">
                      Diversification Mastery
                    </span>
                  </div>
                  <span>
                    Diversify your real estate portfolio effectively. Our
                    experts guide you in spreading your investments across
                    various property types and locations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Explore />
    </div>
  );
};

export default Services;
