import React from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { IoSparklesSharp } from "react-icons/io5";

const ContactForm = () => {
  return (
    <>
      <div className="flex flex-col gap-3 w-full">
      <span className="flex gap-1 items-center justify-start w-full">
          <IoSparklesSharp className="text-3xl" />
        </span>
        <h1 className="text-3xl font-semibold">Let's Connect</h1>
        <div className="flex flex-row justify-between items-center">
          <p className="w-full md:text-base text-sm">
            We're excited to connect with you and learn more about your real
            estate goals. Use the form below to get in touch with Estatein.
            Whether you're a prospective client, partner, or simply curious
            about our services, we're here to answer your questions and provide
            the assistance you need.
          </p>
        </div>
      </div>
      <form className="space-y-6 border md:p-10 p-5 rounded-lg w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <label htmlFor="email" className="block text-sm font-medium mb-2">
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
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Phone Number"
              className="w-full border rounded-md p-3 "
            />
          </div>
          <div>
            <label htmlFor="" className="block text-sm font-medium mb-2">
              Inquiry Type
            </label>
            <div className="relative">
              <select
                id=""
                className="w-full border rounded-md p-3 appearance-none cursor-pointer"
              >
                <option>Select Inquiry Type</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 " />
            </div>
          </div>
          <div>
            <label htmlFor="" className="block text-sm font-medium mb-2">
              How Did You Hear About Us?
            </label>
            <div className="relative">
              <select
                id=""
                className="w-full border rounded-md p-3 appearance-none cursor-pointer"
              >
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 " />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
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
              I agree with <Link className="underline"> Terms of Use</Link> and
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
    </>
  );
};

export default ContactForm;
