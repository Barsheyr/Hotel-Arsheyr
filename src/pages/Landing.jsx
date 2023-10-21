import React, { useContext, useState } from "react";

import HeroSlider from "../components/HeroSlider";
import { featureDatas } from "../data";
import Testimonials from "../components/Testimonials";
import {
  BsArrowsFullscreen,
  BsPeople,
  BsFillDiamondFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import { pricing } from "../data";

import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi";
import Modal from "../components/Modal";
import Bookingnow from "../components/Bookingnow";

const Landing = () => {
  const [index, setIndex] = useState(1);
  const { title, cards } = pricing;

  return (
    <div>
      <HeroSlider />

      {/* <Rooms /> */}
      <div className="max-w-5xl mx-auto py-20">
        <div className="text-center">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
            FEATURES 5-STARS
          </div>
          <h2 className="font-primary title mb-4"> Room & Suites </h2>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {featureDatas.map((featureData, index) => (
            <div className="bg-white shadow-2xl min-h-[500px] group lg:p-0 p-20 max-w-5xl mx-auto">
              <div className="overflow-hidden">
                <img
                  src={featureData.image}
                  alt=""
                  className="group-hover:scale-110 transition-all duration-300 w-full"
                />
              </div>

              <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                <div className="flex justify-between  w-[80%]">
                  {/* size */}
                  <div className="flex items-center gap-x-2">
                    <div className="text-black">
                      <BsArrowsFullscreen className="text-[25px]" />
                    </div>

                    <div className="flex gap-x-1">
                      <div>Size</div>
                      <div> {featureData.size} </div>
                    </div>
                  </div>
                  {/* room capacity */}
                  <div className="flex items-center gap-x-2">
                    <div className="text-black">
                      <BsPeople className="text-[25px]" />
                    </div>

                    <div className="flex gap-x-1 text-xs">
                      <div className=""> Max People </div>
                      <div> {featureData.maxPerson} </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* name */}
              <div className="text-center">
                <Link>
                  <h3 className="h3"> {featureData.name}</h3>
                </Link>
                <p className="text-sm max-w-[300px] mx-auto mb-3 lg:mb-6">
                  {featureData.description.slice(0, 100)}
                </p>

                <div className="font-bold text-3xl">
                  Price : ${featureData.price}
                </div>
              </div>

              {/* btn */}
              <div>
                <Bookingnow />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-[300px] mt-20">
          <Link
            to={"/roompage"}
            className="bg-black hover:bg-gray-500 px-20 py-5  text-2xl font-primary tracking-wider text-white rounded-md"
          >
            All Rooms
          </Link>
        </div>
      </div>

      {/* card */}

      <section className="mt-20">
        <h1 className="title text-center"> SPECIAL OFFER </h1>
        <div className="flex flex-col pt-20 lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center ">
          {cards.map((card, cardIndex) => {
            const { icon, title, services, price, userAmount, btnText, delay } =
              card;
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="300"
                key={cardIndex}
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${
                    cardIndex === index
                      ? "bg-white shadow-2xl"
                      : " border border-grey"
                  } w-[300px] rounded-[12px] cursor-pointer p-[40px] transition-all h-[550px]`}
                >
                  <div className="mb-8">{/* <BsFillDiamondFill /> */}</div>
                  <div className="text-[32px] font-semibold mb-8">{title}</div>
                  <div className="flex flex-col gap-y-2 mb-6">
                    {services.map((service, index) => {
                      const { name } = service;

                      return (
                        <div
                          className="flex items-center gap-x-[10px]"
                          key={index}
                        >
                          <HiCheck className="text-light" />
                          {name}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mb-10">
                    <div>
                      <span className="text-2xl font-semibold">{price} /</span>
                      <span className="text-xl text-light font-light">
                        year
                      </span>
                    </div>
                    {/* <div className="text-base text-light"> {userAmount} </div> */}
                  </div>

                  <button
                    className={`${
                      cardIndex === index
                        ? `bg-black hover:bg-black text-white`
                        : `border border-black-500 text-black`
                    } btn btn-sm space-x-[14px] rounded-lg py-5`}
                  >
                    <span className="text-xl font-extrabold"> {btnText}</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* testimonials */}

      <section className="h-[100vh] pt-20">
        <Testimonials />
      </section>

      <section>
        <Modal />
      </section>
    </div>
  );
};

export default Landing;
