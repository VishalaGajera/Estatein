import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import icon1 from "../../../assets/Image/icon1.png";
import icon2 from "../../../assets/Image/icon2.png";
import icon3 from "../../../assets/Image/icon3.png";
import icon4 from "../../../assets/Image/icon4.png";
import icon15 from "../../../assets/Image/icon15.png";
import icon16 from "../../../assets/Image/icon16.png";
import icon17 from "../../../assets/Image/icon17.png";
import icon18 from "../../../assets/Image/icon18.png";
import Image1 from "../../../assets/Image/Image1.png";
import Image2 from "../../../assets/Image/Image2.png";
import Image3 from "../../../assets/Image/Image3.png";
import Image4 from "../../../assets/Image/Image4.png";
import Image5 from "../../../assets/Image/Image5.png";
import Image6 from "../../../assets/Image/Image6.png";
import AbstractDesign1 from "../../../assets/Image/AbstractDesign1.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Explore from "../../Common/Explore";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import { IoSparklesSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center md:gap-20 gap-10 w-full">
      <div className="flex flex-col border-b w-full justify-center items-center">
        <div className="container w-full md:py-14 py-10">
          <div className="flex flex-col mx-5 gap-5">
            <h1 className="md:text-4xl text-2xl font-bold">
              Get in Touch with Estatein
            </h1>
            <p className="md:flex hidden ">
              Welcome to Estatein's Contact Us page. We're here to assist you
              with any inquiries, requests, or feedback you may have. Whether
              you're looking to buy or sell a property, explore investment
              opportunities, or simply want to connect, we're just a message
              away. Reach out to us, and let's start a conversation.
            </p>
            <p className="md:hidden flex">
              Welcome to Estatein's Contact Us page. We're here to assist you
              with any inquiries, requests, or feedback you may have.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 mx-5 md:p-6 p-3 shadow-custom w-full">
          <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
            <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
              <HiOutlineArrowUpRight />
            </span>
            <img src={icon15} alt="" className="md:w-auto w-16" />
            <span className="text-sm">info@estatein.com</span>
          </div>
          <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
            <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
              <HiOutlineArrowUpRight />
            </span>
            <img src={icon16} alt="" className="md:w-auto w-16" />
            <span className="text-sm">+1 (123) 456-7890</span>
          </div>
          <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
            <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
              <HiOutlineArrowUpRight />
            </span>
            <img src={icon17} alt="" className="md:w-auto w-16" />
            <span className="text-sm">Main Headquarters</span>
          </div>
          <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
            <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
              <HiOutlineArrowUpRight />
            </span>
            <img src={icon18} alt="" className="md:w-auto w-16" />
            <span className="text-sm flex justify-center items-center gap-2 flex-wrap">
              <Link>Instagram</Link>
              <Link>Linkedin</Link>
              <Link>Facebook</Link>
            </span>
          </div>
        </div>
      </div>

      <div className="container w-full">
        <div className="flex flex-col justify-center items-center md:gap-20 gap-10 mx-5">
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <ContactForm />
          </div>

          <div className="flex flex-col justify-center items-start gap-10 w-full">
            <div className="flex flex-col gap-3 w-full">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="text-3xl font-semibold">
                Discover Our Office Locations
              </h1>
              <p className="w-full md:text-base text-sm">
                Estatein is here to serve you across multiple locations. Whether
                you're looking to meet our team, discuss real estate
                opportunities, or simply drop by for a chat, we have offices
                conveniently located to serve your needs. Explore the categories
                below to find the Estatein office nearest to you
              </p>
            </div>
            <div className="flex gap-3">
              <span className="md:px-10 px-3 py-2 rounded-lg border">All</span>
              <span className="md:px-10 px-3 py-2 rounded-lg border">
                Regional
              </span>
              <span className="md:px-10 px-3 py-2 rounded-lg border">
                International
              </span>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="md:p-10 p-5 border rounded-xl shadow-lg flex flex-col gap-8 justify-between items-start">
                <div className="flex flex-col gap-4">
                  <p className="text-sm">Main Headquarters</p>
                  <h1 className="md:text-2xl text-xl font-bold">
                    123 Estatein Plaza, City Center, Metropolis
                  </h1>
                  <p>
                    Our main headquarters serve as the heart of Estatein.
                    Located in the bustling city center, this is where our core
                    team of experts operates, driving the excellence and
                    innovation that define us.
                  </p>
                </div>
                <div className="flex justify-start items-start gap-2 flex-wrap">
                  <span className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm">
                    <MdOutlineEmail className="text-xl" />
                    <span>info@estatein.com</span>
                  </span>
                  <span className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm">
                    <FaPhoneAlt className="text-base" />
                    <span>+1 (123) 456-7890</span>
                  </span>
                  <span className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm">
                    <FaLocationDot className="text-base" />
                    <span>Metropolis</span>
                  </span>
                </div>
                <div className="w-full rounded-lg bg-BgPurple text-white p-3 flex justify-center items-center">
                  <Link>Get Direction</Link>
                </div>
              </div>
              <div className="md:p-10 p-5 border rounded-xl shadow-lg flex flex-col gap-8 justify-between items-start">
                <div className="flex flex-col gap-4">
                  <p className="text-sm">Regional Offices</p>
                  <h1 className="md:text-2xl text-xl font-bold">
                    456 Urban Avenue, Downtown District, Metropolis{" "}
                  </h1>
                  <p>
                    Estatein's presence extends to multiple regions, each with
                    its own dynamic real estate landscape. Discover our regional
                    offices, staffed by local experts who understand the nuances
                    of their respective markets.
                  </p>
                </div>
                <div className="flex justify-start items-start gap-2 flex-wrap">
                  <span className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm">
                    <MdOutlineEmail className="text-xl" />
                    <span>info@estatein.com</span>
                  </span>
                  <span className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm">
                    <FaPhoneAlt className="text-base" />
                    <span>+1 (123) 628-7890</span>
                  </span>
                  <span className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm">
                    <FaLocationDot className="text-base" />
                    <span>Metropolis</span>
                  </span>
                </div>
                <div className="w-full rounded-lg bg-BgPurple text-white p-3 flex justify-center items-center">
                  <Link>Get Direction</Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="border rounded-xl md:p-10 p-4 flex flex-col justify-center items-center gap-5"
            style={{
              backgroundImage: `url(${AbstractDesign1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="md:gap-5 gap-1 flex flex-col">
              <div className="grid grid-cols-2 md:gap-3 gap-1">
                <img
                  src={Image1}
                  alt=""
                  className="rounded-lg overflow-hidden md:h-auto"
                />
                <img
                  src={Image3}
                  alt=""
                  className="rounded-lg overflow-hidden md:h-auto"
                />
              </div>
              <div className="grid grid-cols-2 md:gap-3 gap-1">
                <img
                  src={Image2}
                  alt=""
                  className="rounded-lg overflow-hidden md:h-auto"
                />
                <div className="grid grid-cols-2 md:gap-3 gap-1">
                  <img
                    src={Image4}
                    alt=""
                    className="rounded-lg overflow-hidden md:h-auto"
                  />
                  <img
                    src={Image5}
                    alt=""
                    className="rounded-lg overflow-hidden md:h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="flex flex-col gap-5">
                <h1 className="lg:text-4xl text-2xl font-semibold">
                  Explore Estatein's World
                </h1>
                <p className="lg:w-4/5 w-full">
                  Step inside the world of Estatein, where professionalism meets
                  warmth, and expertise meets passion. Our gallery offers a
                  glimpse into our team and workspaces, inviting you to get to
                  know us better.
                </p>
              </div>
              <img
                src={Image6}
                alt=""
                className="rounded-lg overflow-hidden h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Explore />
    </div>
  );
};

export default Contact;
