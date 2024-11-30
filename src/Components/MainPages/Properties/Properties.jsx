import React from "react";
import Explore from "../../Common/Explore";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { SiHackthebox } from "react-icons/si";
import { HiHomeModern } from "react-icons/hi2";
import { BsCalendar } from "react-icons/bs";
import Union from "../../../assets/Image/Union.png";
import {
  Search,
  ChevronDown,
  MapPin,
  Home,
  DollarSign,
  Maximize,
  Calendar,
} from "lucide-react";
import img1 from "../../../assets/Image/img1.png";
import img2 from "../../../assets/Image/img2.png";
import img3 from "../../../assets/Image/img3.png";
import { IoBed, IoSparklesSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Link, useNavigate } from "react-router-dom";
import MessageForm from "./MessageForm";

const Properties = () => {
  const navigate = useNavigate();
  const properties = [
    {
      id: 1,
      imageUrl: img1,
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
      bedroom: 4,
      bathroom: 3,
      price: "$550,000",
    },
    {
      id: 2,
      imageUrl: img2,
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
      bedroom: 4,
      bathroom: 3,
      price: "$550,000",
    },
    {
      id: 3,
      imageUrl: img3,
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
      bedroom: 4,
      bathroom: 3,
      price: "$550,000",
    },
    {
      id: 4,
      imageUrl: img3,
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
      bedroom: 4,
      bathroom: 3,
      price: "$550,000",
    },
  ];

  const handleClick = () => {
    navigate("/properties/property-detail");
  };
  return (
    <div className="flex justify-center items-center flex-col md:gap-20 gap-10">
      {/* <div className="border-b w-full flex justify-center items-center py-20">
        <div className="container">
          <div className="flex flex-col gap-5 mx-5">
            <h1 className="md:text-3xl text-2xl font-semibold">
              Find Your Dream Property
            </h1>
            <p>
              Welcome to Estatein, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container w-full">
        <div className="flex flex-col justify-center items-center md:gap-20 gap-10 mx-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative w-full">
              <div className="flex justify-center items-center w-full">
              <div className="absolute md:bottom-11 border p-3 flex justify-between items-center w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search For a Property"
                  className=""
                />
                <div className="flex justify-center items-center">
                  <CiSearch />
                  <button>Find Property</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <main className="w-full">
        <div className="flex justify-center items-center flex-col border-b">
          <div className="container flex flex-col gap-3 py-14">
            <div className="flex flex-col mx-5">
              <h1 className="md:text-4xl text-2xl font-bold mb-4">
                Find Your Dream Property
              </h1>
              <p className="text-gray-400 max-w-3xl">
                Welcome to Estatein, where your dream property awaits in every
                corner of our beautiful world. Explore our curated selection of
                properties, each offering a unique story and a chance to
                redefine your life. With categories to suit every dreamer, your
                journey.
              </p>
            </div>
          </div>
        </div>

        <div className="md:relative flex justify-center items-center md:mt-0 mt-5 mx-5">
          <div className="md:absolute lg:-bottom-24 -bottom-40">
            <div className="relative mb-4 max-w-4xl mx-auto">
              <input
                type="text"
                placeholder="Search For A Property"
                className="w-full border rounded-t-lg py-5 px-4 pr-12"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-BgPurple text-white px-4 py-3 rounded-lg flex items-center">
                <Search className="w-4 h-4 md:mr-2" />
                <span className="md:flex hidden">Find Property</span>
              </button>
            </div>

            <div className="flex justify-center items-center gap-4 lg:flex-nowrap flex-wrap">
              {[
                { name: "Location", icon: CiLocationOn },
                { name: "Property Type", icon: HiHomeModern },
                { name: "Pricing Range", icon: SiHackthebox },
                { name: "Property Size", icon: SiHackthebox },
                { name: "Build Year", icon: BsCalendar },
              ].map(({ name, icon: Icon }) => (
                <div className="flex flex-row justify-center items-center gap-3 border rounded-lg py-3 md:w-fit w-full">
                  <span className="border-r px-3">
                    <Icon className="text-lg" />
                  </span>
                  <button
                    type="button"
                    className="inline-flex md:justify-center justify-between items-center bg-white text-sm font-medium pr-3 2xl:gap-4 md:w-fit w-full"
                    id="menu-button"
                    // aria-expanded={dropList}
                    aria-haspopup="true"
                    // onClick={() => setDropList(!dropList)}
                  >
                    <p className="text-sm">
                      <span className="font-bold">{name}</span>
                    </p>
                    <IoIosArrowDown
                      className={`ml-2 -mr-1 text-2xl transform transition-transform duration-300 `}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                //   ${dropList ? "rotate-180" : "rotate-0"}
              ))}
              {/* <div
              key={name}
              className="flex flex-row border  rounded-lg py-3 px-4 gap-2"
            >
              <div className="flex items-center pointer-events-none border-r pr-3">
                <Icon className="w-4 h-4" />
              </div>
              <select className="">
                <option>{name}</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div> */}
            </div>
          </div>
        </div>
      </main>

      <div className="container lg:mt-14 md:mt-20">
        <div className="flex justify-center items-center flex-col md:gap-20 gap-10 mx-5">
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <div className="flex flex-col gap-3 w-full">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="md:text-3xl text-2xl font-semibold">
                Discover a World of Possibilities
              </h1>
              <div className="flex flex-row justify-between items-center">
                <p className="w-full md:text-base text-sm">
                  Our portfolio of properties is as diverse as your dreams.
                  Explore the following categories to find the perfect property
                  that resonates with your vision of home
                </p>
              </div>
            </div>

            <div className="">
              <div className="relative flex flex-col items-center justify-center pb-5 border-b">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  slidesPerView={3}
                  spaceBetween={24}
                  loop={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".custom-next-feature",
                    prevEl: ".custom-prev-feature",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                  }}
                  // className="flex md:flex-row flex-col  md:container w-72 md:p-5"
                  className="grid grid-cols-3 md:container w-full md:pb-5 h-full"
                >
                  {properties?.map((data, index) => {
                    return (
                      <SwiperSlide
                        className="border rounded-lg md:p-5 p-3 w-full flex flex-col gap-5"
                        key={index}
                      >
                        <div>
                          <img
                            src={data.imageUrl}
                            alt=""
                            className="w-full"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-3">
                          <span className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm w-fit">
                            Coastal Escapes - Where Waves Beckon
                          </span>
                          <div>
                            <h1 className="font-semibold text-xl">
                              {data.title}
                            </h1>
                            <p className="text-sm line-clamp-2">
                              {data.description}{" "}
                              <Link className="underline">Read More</Link>
                            </p>
                          </div>
                          <div className="flex justify-between items-center gap-3 w-full">
                            <div className="flex flex-col gap-2">
                              <span className="text-sm">Price</span>
                              <span className="md:text-xl text-base font-semibold">
                                {data.price}
                              </span>
                            </div>
                            <div>
                              <button
                                className="border border-BgPurple bg-BgPurple text-BgWhite rounded-lg 2xl:px-5 px-3 py-3 text-sm md:text-base"
                                onClick={handleClick}
                              >
                                View Property Detail
                              </button>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="flex flex-row gap-5 items-center justify-between py-4">
                <span className="hidden md:flex gap-1">
                  <b>01</b> of 10
                </span>
                <div className="flex flex-row gap-2 md:justify-end justify-between items-center w-full md:w-fit">
                  <span className="custom-prev-feature md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full p-2 text-BgPurple bg-BgLightPurple">
                    <BsArrowLeft />
                  </span>
                  <span className="md:hidden flex gap-1">
                    <b>01</b> of 10
                  </span>
                  <span className="custom-next-feature md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full p-2 text-BgPurple bg-BgLightPurple">
                    <BsArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <MessageForm />
          </div>
        </div>
      </div>

      <Explore />
    </div>
  );
};

export default Properties;
