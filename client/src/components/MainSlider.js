import React from "react";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swipe style
import "swiper/css";
import "swiper/css/pagination";
//import require module
import { Pagination } from "swiper";
//img
import CameraImg from "../img/camera.png";

//data
const sliderData = [
  {
    img: CameraImg,
    preTitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    preTitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    preTitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary max-w-lg rounded-md overflow-hidden drop-shadow-2xl xl:max-w-xl xl:bg-mainSlider xl:bg-no-repeat">
      <>
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[40px]">
              <div className="w-full lg:flex-1">
                <div className="uppercase mb-1 text-center lg:text-left">{slide.preTitle}</div>
                <div className="text-3xl md:text-[36px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                  {slide.titlePart1} <br />
                  {slide.titlePart2} <br />
                  {slide.titlePart3}
                </div>
                <button className="btn btn-accent lg:mx-0">Shop now</button>
              </div>
              <div className="flex-1">
                <img
                  className="xl:absolute xl:-right-8 xl:bottom-0 xl:max-w-[70%] aspect-auto"
                  src={slide.img}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default MainSlider;
