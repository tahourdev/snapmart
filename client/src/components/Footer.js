import React from "react";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 font-semibold mb-6 uppercase">Subscribe to our newsletter</h2>
          <p className="text-white/70">
            Be the first to get the lates news about trends, promotions and much more!
          </p>
        </div>

        {/* form */}
        <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14">
          <input type="text" placeholder="Your email address" className="input" />
          <button className="btn btn-accent min-w-[150px]">Join</button>
        </form>

        {/* links */}
        <div className="text-white/60 text-base capitalize flex gap-x-5 justify-center mb-9">
          <a href="#" className="hover:text-white transition-all">
            Retrun Policy
          </a>
          <a href="#" className="hover:text-white transition-all">
            Track your order
          </a>
          <a href="#" className="hover:text-white transition-all">
            Shipping & delivery
          </a>
        </div>

        {/* socails */}
        <div className="mb-16 flex gap-x-6 justify-center text-lg">
          <a href="#" className="hover:text-white transition-all">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-10 border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            Copyright &copy; Photoland 2023. All right reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
