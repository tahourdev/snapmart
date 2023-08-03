import React from "react";
//useFetch Hook
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";

const Home = () => {
  //Get new products

  return (
    <section>
      <Hero />
      <LatestProducts />
    </section>
  );
};

export default Home;
