import React from "react";
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
import Promoimage1 from "../img/promo_img1.png";
import Promoimage2 from "../img/promo_img2.png";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* Sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className="max-w-lg w-full lg:max-w-[730px] mx-auto">
            <MainSlider />
          </div>
          {/* promi img */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            {/* promo img1 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] relative p-6 overflow-hidden">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 35% all dslr cameras
                </div>
                <a href="#" className="uppercase text-accent">
                  Shop now
                </a>
              </div>
              <img className="absolute -top-2 -right-4 z-20" src={Promoimage1} alt="promo image" />
            </div>

            {/* promo img2 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] relative p-6 overflow-hidden">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 25% mirrorless cameras
                </div>
                <a href="#" className="uppercase text-accent">
                  Shop now
                </a>
              </div>
              <img className="absolute top-2 -right-6 z-20" src={Promoimage2} alt="promo image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
