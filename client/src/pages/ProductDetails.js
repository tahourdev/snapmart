import React, { useContext } from "react";
// import useParam hook
import { useParams } from "react-router-dom";
//import useFetch
import useFetch from "../hooks/useFetch";
//import components
import { RelatedProducts } from "../components";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  const { addToCart } = useContext(CartContext);

  if (!data) {
    return <div className="container mx-auto">Loading...</div>;
  }

  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=""
              className="w-full max-w-[65%]"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* category title */}
            <div className="uppercase text-accent lg:font-medium mb-2">
              {data[0].attributes.categories.data[0].attributes.title} cameras
            </div>

            {/* product title */}
            <h2 className="h2 mb-4">{data[0].attributes.title}</h2>

            {/* description */}
            <p className="mb-12">{data[0].attributes.description}</p>

            {/* price and btn */}
            <div className="flex gap-8 items-center">
              <div className="text-3xl text-accent">${data[0].attributes.price}</div>
              {/* btn */}
              <button onClick={() => addToCart(data, id)} className="btn btn-accent font-semibold">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
