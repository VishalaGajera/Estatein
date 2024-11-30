import React, { useState } from "react";
import Explore from "../../Common/Explore";
import FAQs from "../Home/FAQs";
import pro1 from "../../../assets/Image/pro1.png";
import img1 from "../../../assets/Image/img1.png";
import img2 from "../../../assets/Image/img2.png";
import img3 from "../../../assets/Image/img3.png";
import pro2 from "../../../assets/Image/pro2.png";
import pro3 from "../../../assets/Image/pro3.png";
import pro4 from "../../../assets/Image/pro4.png";
import pro5 from "../../../assets/Image/pro5.png";
import pro6 from "../../../assets/Image/pro6.png";
import pro7 from "../../../assets/Image/pro7.png";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoBed, IoSparklesSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { BiSolidZap } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PropertyDetails = () => {
  const images = [img1, img2, img3, pro4, pro5, pro6, pro7, pro1];
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = images.length;

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const CustomPagination = () => {
    return (
      <div className="flex justify-center items-center gap-1 ">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-1 md:w-4 w-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-BgPurple" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center md:gap-20 gap-10 w-full">
      <div className="container flex justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center md:gap-20 gap-10 w-full pt-10">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col gap-5 justify-center items-center w-full">
              <div className="flex flex-col gap-10 w-full">
                <div className="mx-5 flex md:flex-row flex-col justify-between gap-2 md:items-center items-start">
                  <div className="flex gap-4 2xl:w-60 lg:w-64 md:w-72">
                    <h1 className="font-semibold text-xl">
                      Seaside Serenity Villa
                    </h1>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="flex gap-4 items-center border rounded md:px-4 px-1 py-0.5 md:text-base text-xs">
                      <FaLocationDot />
                      Malibu, California
                    </span>
                    <div className="flex md:flex-col flex-row gap-3 md:items-start items-center">
                      <span>Price</span>
                      <h1 className="font-semibold text-lg">$1,250,000</h1>
                    </div>
                  </div>
                </div>
                <div className="mx-5 border rounded-lg md:p-10 p-5 flex flex-col gap-5">
                  <div className="flex md:flex-col flex-col-reverse gap-5">
                    <div className="flex flex-row md:h-28 h-16 gap-2 w-full border border-lg p-2 overflow-auto rounded-lg">
                      {images?.map((img, index) => (
                        <img
                          src={img}
                          alt=""
                          className="md:h-full md:w-full rounded-lg"
                        />
                      ))}
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5">
                      <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        slidesPerView={3}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{
                          delay: 3500,
                          disableOnInteraction: false,
                        }}
                        onSlideChange={handleSlideChange}
                        navigation={{
                          nextEl: ".custom-next",
                          prevEl: ".custom-prev",
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
                            slidesPerView: 2,
                            spaceBetween: 24,
                          },
                        }}
                        className="grid grid-cols-2 w-full md:p-5"
                      >
                        {images?.map((img, index) => (
                          <SwiperSlide key={index}>
                            <div className="h-full w-full">
                              <img
                                src={img}
                                alt=""
                                className="object-cover w-full h-full rounded-lg"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  <div className="flex w-full justify-center items-center">
                    <div className="flex flex-row gap-2 md:w-fit w-full justify-between items-center border p-2 rounded-full">
                      <span className="custom-prev text-xl cursor-pointer border border-BgPurple rounded-full md:p-2 p-1 text-BgPurple bg-BgLightPurple">
                        <BsArrowLeft />
                      </span>
                      <span className="">
                        <CustomPagination />
                      </span>
                      <span className="custom-next text-xl cursor-pointer border border-BgPurple rounded-full md:p-2 p-1 text-BgPurple bg-BgLightPurple">
                        <BsArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mx-5">
                <div className="flex flex-col lg:p-10 p-5 border rounded-lg h-fit">
                  <div className="pb-5 border-b">
                    <h1 className="font-semibold text-xl">Description</h1>
                    <p>
                      Discover your own piece of paradise with the Seaside
                      Serenity Villa. T With an open floor plan, breathtaking
                      ocean views from every room, and direct access to a
                      pristine sandy beach, this property is the epitome of
                      coastal living.
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 pt-5 w-full">
                    <div className="grid grid-cols-2 col-span-2 gap-5 w-full lg:border-b-0 border-b lg:pb-0 pb-5">
                      <div className="flex border-r flex-col">
                        <span className="flex items-center gap-3">
                          <IoBed />
                          Bedrooms
                        </span>
                        <span className="font-semibold text-lg">04</span>
                      </div>
                      <div className="flex lg:border-r flex-col">
                        <span className="flex items-center gap-3">
                          <FaBath />
                          Bathrooms
                        </span>
                        <span className="font-semibold text-lg">03</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="flex items-center gap-3">Area</span>
                      <span className="font-semibold text-lg">
                        2,500 Square Feet
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg lg:p-10 p-5 gap-5 flex flex-col">
                  <h1 className="font-semibold text-xl">
                    Key Features and Amenities
                  </h1>
                  <div>
                    <ul className="flex flex-col gap-3">
                      <div className="bg-gradient-to-r from-BgPurple">
                        <li className="flex flex-row gap-4 items-center py-3 lg:px-5 px-3 border-l-2 border-BgPurple font-semibold bg-white opacity-75">
                          <span>
                            <BiSolidZap className="text-xl" />
                          </span>
                          <span>
                            {" "}
                            Expansive oceanfront terrace for outdoor
                            entertaining
                          </span>
                        </li>
                      </div>
                      <div className="bg-gradient-to-r from-BgPurple">
                        <li className="flex flex-row gap-4 items-center py-3 lg:px-5 px-3 border-l-2 border-BgPurple font-semibold bg-white opacity-75">
                          <span>
                            <BiSolidZap className="text-xl" />
                          </span>
                          <span>
                            {" "}
                            Gourmet kitchen with top-of-the-line appliances
                          </span>
                        </li>
                      </div>
                      <div className="bg-gradient-to-r from-BgPurple">
                        <li className="flex flex-row gap-4 items-center py-3 lg:px-5 px-3 border-l-2 border-BgPurple font-semibold bg-white opacity-75">
                          <span>
                            <BiSolidZap className="text-xl" />
                          </span>
                          <span>
                            Private beach access for morning strolls and sunset
                            views
                          </span>
                        </li>
                      </div>
                      <div className="bg-gradient-to-r from-BgPurple">
                        <li className="flex flex-row gap-4 items-center py-3 lg:px-5 px-3 border-l-2 border-BgPurple font-semibold bg-white opacity-75">
                          <span>
                            <BiSolidZap className="text-xl" />
                          </span>
                          <span>
                            Master suite with a spa-inspired bathroom and
                            ocean-facing balcony
                          </span>
                        </li>
                      </div>
                      <div className="bg-gradient-to-r from-BgPurple">
                        <li className="flex flex-row gap-4 items-center py-3 lg:px-5 px-3 border-l-2 border-BgPurple font-semibold bg-white opacity-75">
                          <span>
                            <BiSolidZap className="text-xl" />
                          </span>
                          <span>Private garage and ample storage space</span>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 mx-5 gap-10">
            <div className="flex flex-col gap-5">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="text-4xl font-semibold">
                Inquire About Seaside Serenity Villa
              </h1>
              <p>
                Interested in this property? Fill out the form below, and our
                real estate experts will get back to you with more details,
                including scheduling a viewing and answering any questions you
                may have.
              </p>
            </div>
            <div className="col-span-2">
              <form className="space-y-6 border md:p-10 p-4 rounded-lg w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter First Name"
                      className="w-full border rounded-md p-3 "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter Last Name"
                      className="w-full border rounded-md p-3 "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      className="w-full border rounded-md p-3 "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter Phone Number"
                      className="w-full border rounded-md p-3 "
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="block text-sm font-medium mb-2">
                    Selected Property
                  </label>
                  <div className="relative flex justify-center items-center">
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter Phone Number"
                      className="w-full border rounded-md p-3 "
                      value="Seaside Serenity Villa, Malibu, California"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 justify-end flex bg-white">
                      <FaLocationDot className="" />
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Enter your Message here..."
                    className="w-full border rounded-md p-3 "
                  ></textarea>
                </div>

                <div className="flex md:flex-row flex-col items-center justify-between gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 md:text-sm text-xs">
                      I agree with{" "}
                      <Link className="underline"> Terms of Use</Link> and
                      <Link className="underline"> Privacy Policy </Link>
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="bg-BgPurple text-white px-6 py-3 rounded-md transition duration-300"
                  >
                    Send Your Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-10 mx-5">
            <div className="flex flex-col gap-3">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="font-semibold text-3xl">
                Comprehensive Pricing Details
              </h1>
              <p>
                At Estatein, transparency is key. We want you to have a clear
                understanding of all costs associated with your property
                investment. Below, we break down the pricing for Seaside
                Serenity Villa to help you make an informed decision
              </p>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex md:flex-row flex-col border rounded-lg md:py-5 p-5">
                <span className="md:border-r md:border-b-0 border-b md:pb-0 pb-3 md:px-5">
                  Note
                </span>
                <p className="md:px-5 md:pt-0 pt-3">
                  The figures provided above are estimates and may vary
                  depending on the property, location, and individual
                  circumstances.
                </p>
              </div>
              <div className="flex md:flex-row flex-col 2xl:gap-40 lg:gap-20 md:gap-10 gap-5">
                <div className="flex flex-col gap-1">
                  <p>Listing Price</p>
                  <h1 className="font-semibold text-3xl">$1,250,000</h1>
                </div>
                <div className="flex flex-col gap-5 w-full">
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-center pb-5 border-b">
                      <h1>Additional Fees</h1>
                      <button className="border border-BgPurple text-BgPurple rounded-lg md:px-5 px-3 py-3 bg-BgLightPurple">
                        Learn More
                      </button>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 py-5 lg:border-b gap-5">
                      <div className="flex flex-col gap-4 lg:border-b-0 border-b lg:pb-0 pb-5 lg:border-r pr-3">
                        <span>Property Transfer Tax</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $25,000
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            Based on the sale price and local regulations
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 lg:border-b-0 border-b lg:pb-0 pb-5 pr-3">
                        <span>Legal Fees</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $3,000
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            Approximate cost for legal services, including title
                            transfer
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:py-5 lg:border-b gap-5">
                      <div className="flex flex-col gap-4 lg:border-b-0 border-b lg:pb-0 pb-5 lg:border-r pr-3">
                        <span>Home Inspection</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $500
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            Recommended for due diligence
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 pr-3 lg:pb-0 pb-5 lg:border-b-0 border-b">
                        <span>Property Insurance</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $1,200
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            Annual cost for comprehensive property insurance
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:pt-5">
                      <div className="flex flex-col gap-4 lg:pt-0 pt-5">
                        <span>Mortgage Fees</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            Varies
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            If applicable, consult with your lender for specific
                            details
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-center pb-5 border-b">
                      <h1>Monthly Cost</h1>
                      <button className="border border-BgPurple text-BgPurple rounded-lg md:px-5 px-3 py-3 bg-BgLightPurple">
                        Learn More
                      </button>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-4 border-b py-5">
                        <span>Property Transfer Tax</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $25,000
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            Based on the sale price and local regulations
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <span>Legal Fees</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $3,000
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            Approximate cost for legal services, including title
                            transfer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-center pb-5 border-b">
                      <h1>Total Initial Costs</h1>
                      <button className="border border-BgPurple text-BgPurple rounded-lg md:px-5 px-3 py-3 bg-BgLightPurple">
                        Learn More
                      </button>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 py-5 lg:border-b gap-5">
                      <div className="flex flex-col gap-4 lg:border-b-0 border-b lg:pb-0 pb-5 lg:border-r pr-3">
                        <span>Listing Price</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $1,250,000
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 lg:border-b-0 border-b lg:pb-0 pb-5 pr-3">
                        <span>Additional Fees</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $29,700
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            Property transfer tax, legal fees, inspection,
                            insurance
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:pt-5 gap-5">
                      <div className="flex flex-col gap-4 lg:border-r pr-3 lg:border-b-0 border-b lg:pb-0 pb-5">
                        <span>Down Payment</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $250,000
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            20%
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <span>Mortgage Amount</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $1,000,000
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            If applicable
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-center pb-5 border-b">
                      <h1>Monthly Expenses</h1>
                      <button className="border border-BgPurple text-BgPurple rounded-lg md:px-5 px-3 py-3 bg-BgLightPurple">
                        Learn More
                      </button>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 py-5 lg:border-b gap-5">
                      <div className="flex flex-col gap-4 lg:border-b-0 border-b lg:pb-0 pb-5 lg:border-r pr-3">
                        <span>Property Taxes</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $1,250
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 lg:border-b-0 border-b lg:pb-0 pb-5 pr-3">
                        <span>Homeowners' Association Fee</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $300
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:pt-5 gap-5">
                      <div className="flex flex-col gap-4 lg:border-r pr-3 lg:border-b-0 border-b lg:pb-0 pb-5">
                        <span>Mortgage Payment</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            Varies based on terms and interest rate
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            If applicable
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <span>Property Insurance</span>
                        <div className="flex gap-3 items-center">
                          <h1 className="lg:text-2xl text-lg font-semibold">
                            $100
                          </h1>
                          <span className="md:rounded-full rounded-lg border px-3 py-1 flex items-center text-xs">
                            Approximate monthly cost
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <FAQs />
        </div>
      </div>
      <Explore />
    </div>
  );
};

export default PropertyDetails;
