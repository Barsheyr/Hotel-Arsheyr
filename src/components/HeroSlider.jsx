import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { EffectFade, Autoplay } from "swiper/modules";

import Img1 from "../assets/images/header-1.jpg";
import Img2 from "../assets/images/header-2.jpg";
import Img3 from "../assets/images/header-3.jpg";
import Img4 from "../assets/images/header-4.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vida Loca",
    bg: Img1,
    btnText: "See our room",
  },
  {
    title: "Your Luxury Hotel For Vida Loca",
    bg: Img2,
    btnText: "See our room",
  },
  {
    title: "Your Luxury Hotel For Vida Loca",
    bg: Img3,
    btnText: "See our room",
  },
  {
    title: "Your Luxury Hotel For Vida Loca",
    bg: Img4,
    btnText: "See our room",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide
            className="relative h-full flex justify-center items-center"
            key={index}
          >
            <div className="text-white text-center z-20">
              <div>Just Relax Loca</div>

              <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6 ">
                {title}
              </h1>
              <Link to={"/roompage"}>
                <button className="btn btn-lg bg-black hover:bg-gray-500 mx-auto">
                  {btnText}
                </button>
              </Link>
            </div>

            <div className=" absolute top-0 w-full h-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>

            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
