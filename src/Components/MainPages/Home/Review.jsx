import React from "react";
import profile1 from "../../../assets/Image/profile1.png";
import profile2 from "../../../assets/Image/profile2.png";
import profile3 from "../../../assets/Image/profile3.png";
import { FaStar } from "react-icons/fa";
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

const Review = () => {
  const properties = [
    {
      id: 1,
      rating: 5,
      imageUrl: profile1,
      title: "Exceptional Service!",
      description:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      address: "USA, California",
    },
    {
      id: 2,
      rating: 5,
      imageUrl: profile2,
      title: "Efficient and Reliable",
      description:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      address: "USA, Florida",
    },
    {
      id: 3,
      rating: 5,
      imageUrl: profile3,
      title: "Trusted Advisors",
      description:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      address: "USA, Nevada",
    },
    {
      id: 4,
      rating: 5,
      imageUrl: profile3,
      title: "Trusted Advisors",
      description:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      address: "USA, Nevada",
    },
  ];
  return (
    <div className="flex flex-col mx-5 justify-center items-center gap-5 w-full">
      <div className="flex flex-col w-full gap-3">
        <span className="flex gap-1 items-center justify-start w-full">
          <IoSparklesSharp className="text-3xl" />
        </span>

        <div className="flex flex-row justify-between items-end w-full ">
          <div className="flex flex-col gap-3">
            <h1 className="md:text-3xl text-2xl font-semibold">
              What Our Clients Say
            </h1>
            <p className="">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </div>
          <button className="border rounded-lg px-5 py-3 bg-[#f8f6ff] border-BgPurple text-BgPurple md:flex hidden">
            View All Testimonials
          </button>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col items-center justify-center pb-5 border-b">
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
              nextEl: ".custom-next-review",
              prevEl: ".custom-prev-review",
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
                  className="border rounded-lg md:p-5 p-3 w-full flex flex-col gap-5 h-full"
                  key={index}
                >
                  <div className="flex gap-3 items-center text-[#FFE500] text-lg">
                    {[...Array(data.rating)].map((_, i) => (
                      <span className="rounded-full p-1 border">
                        <FaStar />
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col justify-center items-start gap-3 h-full">
                    <div className="h-full">
                      <h1 className="font-semibold text-xl">{data.title}</h1>
                      <p className="text-sm h-full">{data.description}</p>
                    </div>
                    <div className="flex justify-start items-center gap-3 w-full">
                      <div className="">
                        <img src={data.imageUrl} alt="" />
                      </div>
                      <div className="flex flex-col  items-start">
                        <span className="font-semibold text-lg">
                          {data.name}
                        </span>
                        <span className="text-sm">{data.address}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex flex-row md:gap-5 gap-3 items-center justify-between py-4">
          <button className="md:hidden text-xs flex border rounded-lg p-3 bg-[#f8f6ff] border-BgPurple text-BgPurple">
            View All Testimonials
          </button>
          <span className="hidden md:flex gap-1">
            <span className="font-semibold">01</span> of 10
          </span>
          <div className="flex flex-row gap-2 items-center">
            <span className="custom-prev-review md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full md:p-2 p-1 text-BgPurple bg-BgLightPurple">
              <BsArrowLeft />
            </span>
            <span className="md:hidden flex gap-1">
              <span className="font-semibold">01</span> of 10
            </span>
            <span className="custom-next-review md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full md:p-2 p-1 text-BgPurple bg-BgLightPurple">
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
