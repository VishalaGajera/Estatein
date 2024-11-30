import React from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { IoSparklesSharp } from "react-icons/io5";

const MessageForm = () => {
  return (
    <>
      <div className="flex flex-col gap-3 w-full">
      <span className="flex gap-1 items-center justify-start w-full">
          <IoSparklesSharp className="text-3xl" />
        </span>
        <h1 className="md:text-3xl text-2xl font-semibold">Let's Make it Happen</h1>
        <div className="flex flex-row justify-between items-center">
          <p className="w-full md:text-base text-sm">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this exciting
            journey together.
          </p>
        </div>
      </div>
      <form className="space-y-6 border md:p-10 p-5 rounded-lg w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Preferred Location",
            "Property Type",
            "No. of Bathrooms",
            "No. of Bedrooms",
          ].map((label) => (
            <div key={label}>
              <label
                htmlFor={label.toLowerCase().replace(/ /g, "-")}
                className="block text-sm font-medium mb-2"
              >
                {label}
              </label>
              <div className="relative">
                <select
                  id={label.toLowerCase().replace(/ /g, "-")}
                  className="w-full border rounded-md p-3 appearance-none cursor-pointer"
                >
                  <option>Select {label}</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 " />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2">
              Budget
            </label>
            <div className="relative">
              <select
                id="budget"
                className="w-full border rounded-md p-3 appearance-none cursor-pointer"
              >
                <option>Select Budget</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 " />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Preferred Contact Method
            </label>
            <div className="flex md:flex-row flex-col md:space-x-4 gap-4">
              <div className="flex items-center border rounded-md p-3 flex-grow">
                <Phone className=" mr-2" />
                <input
                  type="text"
                  placeholder="Enter Your Number"
                  className="bg-transparent w-full"
                />
              </div>
              <div className="flex items-center border rounded-md p-3 flex-grow">
                <Mail className=" mr-2" />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent w-full"
                />
              </div>
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

export default MessageForm;
