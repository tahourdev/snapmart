import React from "react";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swipe style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import require module
import { Pagination, Navigation } from "swiper";
//import product components
import Product from "../components/Product";
import "../slider.css";
// import CardSkeleton from "./UI/CardSkeleton";

const ProductSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      navigation={true}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      pagination={{
        clickable: true,
      }}
      className="productSlider mx-auto max-w-[360px] md:max-w-lg lg:max-w-4xl xl:max-w-[1280px]">
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default ProductSlider;
