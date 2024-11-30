import React from "react";
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

const FAQs = () => {
  const properties = [
    {
      id: 1,
      title: "How do I search for properties on Estatein?",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      id: 2,
      title: "What documents do I need to sell my property through Estatein?",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      id: 3,
      title: "How can I contact an Estatein agent?",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      id: 4,
      title: "How do I search for properties on Estatein?",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
  ];
  return (
    <div className="flex flex-col mx-5 justify-center items-center gap-5">
      <div className="flex flex-col w-full gap-3">
        <span className="flex gap-1 items-center justify-start w-full">
          <IoSparklesSharp className="text-3xl" />
        </span>
        <div className="flex flex-row justify-between items-end  w-full">
          <div className="flex flex-col gap-3">
            <h1 className="md:text-3xl text-2xl font-semibold">
              Frequently Asked Questions
            </h1>
            <p className="md:w-4/5 w-full md:text-base text-sm">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>
          </div>
          <button className="border rounded-lg px-5 py-3 bg-[#f8f6ff] border-BgPurple text-BgPurple md:flex hidden w-fit">
            View All FAQ's
          </button>
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
              nextEl: ".custom-next-FAQ",
              prevEl: ".custom-prev-FAQ",
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
            // className="flex md:flex-row flex-col md:container w-72 md:p-5 h-full"
            className="grid grid-cols-3 md:container w-full md:pb-5 h-full"
          >
            {properties?.map((data, index) => {
              return (
                <SwiperSlide
                  className="border rounded-lg md:p-5 p-3 w-full flex flex-col gap-5"
                  key={index}
                >
                  <div className="flex flex-col justify-center items-start gap-5 h-full">
                    <div className="h-full">
                      <h1 className="font-semibold text-xl">{data.title}</h1>
                    </div>
                    <p className="text-sm">{data.description}</p>
                    <button className="border border-BgPurple bg-BgPurple text-BgWhite rounded-lg md:px-5 px-3 py-3 text-sm md:text-base">
                      Read More
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex flex-row gap-5 items-center justify-between py-4">
          <button className="md:hidden text-xs flex border rounded-lg p-3 bg-[#f8f6ff] border-BgPurple text-BgPurple">
            View All FAQ's
          </button>
          <span className="hidden md:flex gap-1">
            <b>01</b> of 10
          </span>
          <div className="flex flex-row gap-2 items-center">
            <span className="custom-prev-FAQ md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full md:p-2 p-1 text-BgPurple bg-BgLightPurple">
              <BsArrowLeft />
            </span>
            <span className="md:hidden flex gap-1">
              <b>01</b> of 10
            </span>
            <span className="custom-next-FAQ md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full md:p-2 p-1 text-BgPurple bg-BgLightPurple">
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
