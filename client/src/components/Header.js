import { useContext, useState, useEffect } from "react";
//import logo
import Logo from "../img/logo.png";
//import Icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
//import components
import SearchForm from "./SearchForm";
import CategoryNav from "./CategoryNav";
import Cart from "./Cart";
//import link
import { Link } from "react-router-dom";
import CategoryNavMobile from "./CategoryNavMobile";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen, cartBumping, setCartBumping, itemAmount } = useContext(CartContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCartBumping(false);
    }, 400);
    return () => clearTimeout(timeout);
  });

  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex items-center flex-row gap-4 lg:items-center justify-between mb-4 lg:mb-0">
          {/* Menu */}
          <div onClick={() => setCatNavMobile(true)} className="text-3xl cursor-pointer xl:hidden">
            <FiMenu />
          </div>
          {/* CategoryNav mobile */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* Logo */}
          <Link to="/">
            <div>
              <p className="font-logo tracking-tighter text-5xl">
                snap<span className="text-accent">mart</span>
              </p>
              <p className="text-xs font-semibold text-center">Picture perfect gear</p>
            </div>
          </Link>
          {/* Searchform show only on desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[734px] bg-pink-200/10">
            <SearchForm />
          </div>
          {/* Phone & cart */}
          <div className="flex items-center gap-[10px]">
            {/* phone */}
            <div className="hidden xl:block uppercase">Need help? 123 456 789</div>
            {/* cart icon */}
            <div
              onClick={() => setIsOpen(true)}
              className={`${cartBumping ? "animate-bump" : "animate-none"} relative cursor-pointer`}>
              <SlBag className="text-2xl" />
              {/* amount */}
              <div className="absolute bg-accent rounded-full text-black h-5 aspect-square text-sm flex justify-center items-center top-2 -right-2 tracking-tighter font-semibold">
                {itemAmount}
              </div>
            </div>
            {/* cart */}
            <div
              className={`${
                isOpen ? "right-0" : "-right-full"
              } bg-[#0e0f10]/30 backdrop-blur-xl  shadow-xl fixed top-0 bottom-0 w-full z-20 md:max-w-[500px] transition-all duration-500`}>
              <Cart />
            </div>
          </div>
        </div>
        {/* show searchbox only on mobile */}
        <div className="xl:hidden mt-2">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
