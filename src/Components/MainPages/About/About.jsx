import React from "react";
import AboutImg from "../../../assets/Image/AboutImg.png";
import { FaStar, FaTwitter } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import Team1 from "../../../assets/Image/Team1.png";
import Team2 from "../../../assets/Image/Team2.png";
import Team3 from "../../../assets/Image/Team3.png";
import Team4 from "../../../assets/Image/Team4.png";
import Send from "../../../assets/Image/Send.png";
import bg1 from "../../../assets/Image/bg1.png";
import bg2 from "../../../assets/Image/bg2.png";
import { GrAppsRounded } from "react-icons/gr";
import { FiZap } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Explore from "../../Common/Explore";
import { IoSparklesSharp } from "react-icons/io5";

const About = () => {
  const Experience = [
    {
      id: "01",
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,",
    },
    {
      id: "02",
      title: "Narrowing Down Your Choices",
      description:
        "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      id: "03",
      title: "Personalized Guidance",
      description:
        "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      id: "04",
      title: "See It for Yourself",
      description:
        "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      id: "05",
      title: "Making Informed Decisions",
      description:
        "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
    },
    {
      id: "06",
      title: "Getting the Best Deal",
      description:
        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];

  const TeamMember = [
    {
      id: 1,
      profile: Team1,
      name: "Max Mitchell",
      role: "Founder",
    },
    {
      id: 1,
      profile: Team2,
      name: "Sarah Johnson",
      role: "Chief Real Estate Officer",
    },
    {
      id: 1,
      profile: Team3,
      name: "David Brown",
      role: "Head of Property Management",
    },
    {
      id: 1,
      profile: Team4,
      name: "Michael Turner",
      role: "Legal Counsel",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full md:gap-20 gap-10">
      <div className="container">
        <div className="flex justify-center items-center flex-col md:gap-20 gap-10 mx-5">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 md:mt-20 mt-10">
            <div className="flex flex-col gap-14 justify-center order-2 lg:order-first">
              <div className="flex flex-col gap-5">
                <span className="flex gap-1 items-center justify-start w-full">
                  <IoSparklesSharp className="text-3xl" />
                </span>
                <h1 className="font-semibold md:text-4xl text-2xl">
                  Our Journey
                </h1>
                <p>
                  Our story is one of continuous growth and evolution. We
                  started as a small team with big dreams, determined to create
                  a real estate platform that transcended the ordinary. Over the
                  years, we've expanded our reach, forged valuable partnerships,
                  and gained the trust of countless clients.
                </p>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
                <div className="flex flex-col gap-3 border rounded-lg p-3 md:text-start text-center">
                  <span className="font-semibold text-3xl">200+</span>
                  <span className="md:text-base text-sm">Happy Customers</span>
                </div>
                <div className="flex flex-col gap-3 border rounded-lg p-3 md:text-start text-center">
                  <span className="font-semibold text-3xl">10k+</span>
                  <span className="md:text-base text-sm">
                    Properties For Clients
                  </span>
                </div>
                <div className="flex flex-col gap-3 border rounded-lg p-3 md:text-start text-center md:col-span-1 col-span-2">
                  <span className="font-semibold text-3xl">16+</span>
                  <span className="md:text-base text-sm">
                    Years of Experience
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-xl overflow-hidden">
              <img src={AboutImg} alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            <div className="flex flex-col gap-14 justify-center">
              <div className="flex flex-col gap-5">
                <span className="flex gap-1 items-center justify-start w-full">
                  <IoSparklesSharp className="text-3xl" />
                </span>
                <h1 className="font-semibold md:text-4xl text-2xl">
                  Our Values
                </h1>
                <p>
                  Our story is one of continuous growth and evolution. We
                  started as a small team with big dreams, determined to create
                  a real estate platform that transcended the ordinary.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 border rounded-xl md:p-10 p-5 grid shadow-custom">
              <div className="grid md:grid-cols-2 grid-cols-1 md:pb-8 md:border-b">
                <div className="flex flex-col gap-2 md:border-r md:border-b-0 border-b md:pb-0 pb-5">
                  <div className="flex gap-4 items-center">
                    <span className="text-BgPurple border border-BgPurple rounded-full p-3 text-xl">
                      <FaStar />
                    </span>
                    <span className="text-xl font-semibold">Trust</span>
                  </div>
                  <span>
                    Trust is the cornerstone of every successful real estate
                    transaction.
                  </span>
                </div>
                <div className="flex flex-col gap-2 md:pl-6 md:border-b-0 border-b  md:py-0 py-5">
                  <div className="flex gap-4 items-center">
                    <span className="text-BgPurple border border-BgPurple rounded-full p-3 text-xl">
                      <FaGraduationCap />
                    </span>
                    <span className="text-xl font-semibold">Excellence</span>
                  </div>
                  <span>
                    We set the bar high for ourselves. From the properties we
                    list to the services we provide.
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:pt-8">
                <div className="flex flex-col gap-2 md:border-r md:border-b-0 border-b md:py-0 py-5">
                  <div className="flex gap-4 items-center">
                    <span className="text-BgPurple border border-BgPurple rounded-full p-3 text-xl">
                      <MdGroups />
                    </span>
                    <span className="text-xl font-semibold">
                      Client-Centric
                    </span>
                  </div>
                  <span>
                    Your dreams and needs are at the center of our universe. We
                    listen, understand.
                  </span>
                </div>
                <div className="flex flex-col gap-2 md:pl-6 md:pt-0 pt-5">
                  <div className="flex gap-4 items-center">
                    <span className="text-BgPurple border border-BgPurple rounded-full p-3 text-xl">
                      <FaStar />
                    </span>
                    <span className="text-xl font-semibold">
                      Our Commitment
                    </span>
                  </div>
                  <span>
                    We are dedicated to providing you with the highest level of
                    service, professionalism.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-14 justify-center">
            <div className="flex flex-col gap-5">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="font-semibold md:text-4xl text-2xl">
                Our Achievements
              </h1>
              <p>
                Our story is one of continuous growth and evolution. We started
                as a small team with big dreams, determined to create a real
                estate platform that transcended the ordinary.
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <div className="flex flex-col gap-3 border-2 rounded-lg lg:p-10 p-5 text-start shadow-custom">
                <span className="font-semibold md:text-2xl text-xl">
                  3+ Years of Excellence
                </span>
                <span className="md:text-base text-sm">
                  With over 3 years in the industry, we've amassed a wealth of
                  knowledge and experience.
                </span>
              </div>
              <div className="flex flex-col gap-3 border-2 rounded-lg lg:p-10 p-5 text-start shadow-custom">
                <span className="font-semibold md:text-2xl text-xl">
                  Happy Clients
                </span>
                <span className="md:text-base text-sm">
                  Our greatest achievement is the satisfaction of our clients.
                  Their success stories fuel our passion for what we do.
                </span>
              </div>
              <div className="flex flex-col gap-3 border-2 rounded-lg lg:p-10 p-5 text-start shadow-custom">
                <span className="font-semibold md:text-2xl text-xl">
                  Industry Recognition
                </span>
                <span className="md:text-base text-sm">
                  We've earned the respect of our peers and industry leaders,
                  with accolades and awards that reflect our commitment to
                  excellence.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-14 justify-center">
            <div className="flex flex-col gap-5">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="font-semibold md:text-4xl text-2xl">
                Navigating the Estatein Experience
              </h1>
              <p>
                At Estatein, we've designed a straightforward process to help
                you find and purchase your dream property with ease. Here's a
                step-by-step guide to how it all works.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {Experience?.map((data, index) => {
                  return (
                    <div className="flex flex-col">
                      <div className="px-5 py-3 border-l border-l-BgPurple">
                        <span className="font-semibold">Step {data.id}</span>
                      </div>
                      <div className="flex flex-col gap-4 lg:p-10 p-7 h-full border rounded-b-xl rounded-r-xl bg-gradient-linear opacity-100 border-l-BgPurple border-t-BgPurple">
                        <h1 className="font-semibold text-2xl">{data.title}</h1>
                        <p>{data.description}</p>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="flex flex-col">
                  <div className="px-5 py-3 border-l">
                    <span className="font-semibold">Step 01</span>
                  </div>
                  <div className="flex flex-col gap-4 lg:p-10 p-7 border rounded-b-xl rounded-r-xl">
                    <h1 className="font-semibold text-2xl">
                      Discover a World of Possibilities
                    </h1>
                    <p>
                      Your journey begins with exploring our carefully curated
                      property listings. Use our intuitive search tools to
                      filter properties based on your preferences, including
                      location,
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="px-5 py-3 border-l">
                    <span className="font-semibold">Step 01</span>
                  </div>
                  <div className="flex flex-col gap-4 lg:p-10 p-7 border rounded-b-xl rounded-r-xl">
                    <h1 className="font-semibold text-2xl">
                      Discover a World of Possibilities
                    </h1>
                    <p>
                      Your journey begins with exploring our carefully curated
                      property listings. Use our intuitive search tools to
                      filter properties based on your preferences, including
                      location,
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="px-5 py-3 border-l">
                    <span className="font-semibold">Step 01</span>
                  </div>
                  <div className="flex flex-col gap-4 lg:p-10 p-7 border rounded-b-xl rounded-r-xl">
                    <h1 className="font-semibold text-2xl">
                      Discover a World of Possibilities
                    </h1>
                    <p>
                      Your journey begins with exploring our carefully curated
                      property listings. Use our intuitive search tools to
                      filter properties based on your preferences, including
                      location,
                    </p>
                  </div>
                </div> */}
              </div>
              {/* <div className="md:grid md:grid-cols-3 grid-cols-1 hidden gap-5">
                <div className="flex flex-col">
                  <div className="px-5 py-3 border-l">
                    <span className="font-semibold">Step 01</span>
                  </div>
                  <div className="flex flex-col gap-4 lg:p-10 p-7 border rounded-b-xl rounded-r-xl">
                    <h1 className="font-semibold text-2xl">
                      Discover a World of Possibilities
                    </h1>
                    <p>
                      Your journey begins with exploring our carefully curated
                      property listings. Use our intuitive search tools to
                      filter properties based on your preferences, including
                      location,
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="px-5 py-3 border-l">
                    <span className="font-semibold">Step 01</span>
                  </div>
                  <div className="flex flex-col gap-4 lg:p-10 p-7 border rounded-b-xl rounded-r-xl">
                    <h1 className="font-semibold text-2xl">
                      Discover a World of Possibilities
                    </h1>
                    <p>
                      Your journey begins with exploring our carefully curated
                      property listings. Use our intuitive search tools to
                      filter properties based on your preferences, including
                      location,
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="px-5 py-3 border-l">
                    <span className="font-semibold">Step 01</span>
                  </div>
                  <div className="flex flex-col gap-4 lg:p-10 p-7 border rounded-b-xl rounded-r-xl">
                    <h1 className="font-semibold text-2xl">
                      Discover a World of Possibilities
                    </h1>
                    <p>
                      Your journey begins with exploring our carefully curated
                      property listings. Use our intuitive search tools to
                      filter properties based on your preferences, including
                      location,
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="flex flex-col gap-14 justify-center">
            <div className="flex flex-col gap-5">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="font-semibold md:text-4xl text-2xl">
                Meet the Estatein Team
              </h1>
              <p>
                At Estatein, our success is driven by the dedication and
                expertise of our team. Get to know the people behind our mission
                to make your real estate dreams a reality.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {TeamMember.map((member, index) => {
                  return (
                    <div
                      className="border rounded-xl p-5 flex flex-col justify-center items-center gap-10 w-full"
                      key={index}
                    >
                      <div className="relative h-full w-full">
                        <img src={member.profile} alt="" className="w-full" />
                        <div className=" flex justify-center items-center">
                          <span className="absolute bg-BgPurple rounded-full px-5 py-3 text-white text-xl">
                            <FaTwitter />
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-col gap-5 w-full">
                        <div className="flex flex-col justify-center items-center gap-1">
                          <h1 className="font-semibold text-2xl">
                            {member.name}
                          </h1>
                          <p className="text-base text-center">{member.role}</p>
                        </div>
                        <div className="flex gap-3 border rounded-full p-2 w-full">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Say Hello 👋"
                            className="w-full rounded-full ml-3 outline-none text-lg"
                          />
                          <img src={Send} alt="" className="w-16" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-14 justify-center">
            <div className="flex flex-col gap-5">
              <span className="flex gap-1 items-center justify-start w-full">
                <IoSparklesSharp className="text-3xl" />
              </span>
              <h1 className="font-semibold md:text-4xl text-2xl">
                Our Valued Clients
              </h1>
              <p>
                At Estatein, we have had the privilege of working with a diverse
                range of clients across various industries. Here are some of the
                clients we've had the pleasure of serving
              </p>
            </div>
            <div className="flex flex-col gap-5">
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
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
                className="grid md:grid-cols-2 grid-cols-1 gap-5 md:p-4 p-0"
              >
                {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-5"> */}
                {[...Array(5)].map((_, i) => (
                  <SwiperSlide className="md:p-10 p-5 border rounded-xl shadow-lg">
                    <div className="flex lg:flex-row flex-col gap-5 justify-between items-start mb-6">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Since 2019</p>
                        <h1 className="md:text-3xl text-2xl font-bold">ABC Corporation</h1>
                      </div>
                      <button
                        variant="outline"
                        className="border border-BgPurple text-BgPurple rounded-lg px-5 py-3 lg:w-fit w-full bg-BgLightPurple"
                      >
                        Visit Website
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="border-r pr-2">
                        <span className="flex items-center mb-2">
                          <GrAppsRounded className="w-4 h-4 mr-2" />
                          Domain
                        </span>
                        <p className="font-semibold md:text-base text-sm">
                          Commercial Real Estate
                        </p>
                      </div>
                      <div>
                        <span className="flex items-center mb-2">
                          <FiZap className="w-4 h-4 mr-2" />
                          Category
                        </span>
                        <p className="font-semibold md:text-base text-sm">
                          Luxury Home Development
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border">
                      <h3 className="text-lg mb-2">What They Said 🤗</h3>
                      <p className="font-semibold">
                        Estatein's expertise in finding the perfect office space
                        for our expanding operations was invaluable. They truly
                        understand our business needs.
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
                {/* </div> */}
              </Swiper>
              <div className="flex flex-row gap-5 items-center justify-between md:px-5">
                <span className="hidden md:flex gap-1 w-full">
                  <b>01</b> of 10
                </span>
                <div className="flex flex-row gap-2 md:justify-end justify-between items-center w-full">
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
        </div>
      </div>

      <Explore />
    </div>
  );
};

export default About;
