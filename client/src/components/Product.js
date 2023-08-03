import React from "react";
import { Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch";

const Product = ({ product }) => {
  // const categoryTitle = product.attributes.categories.data.map((category) => category.attributes.title);
  // const categoryTitle = product.attributes.categories.data[0].attributes.title;

  return (
    <Link to={`/product/${product.id}`}>
      <div className="w-full grad h-[362px] rounded-md overflow-hidden relative group">
        {product.attributes.isNew && (
          <div className="text-primary bg-accent rounded-full px-2 absolute top-5 right-5 text-center z-10 font-semibold uppercase text-[12px]">
            {product.attributes.isNew && "New"}
          </div>
        )}
        {/* image */}
        <div className="w-full pt-2 flex items-center justify-center relative">
          <img
            className="w-[162px] h-[162px] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
          />
        </div>
        <div className=" p-6 pb-8 flex flex-col">
          <div className="text-sm text-accent mb-2 capitalize">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          <div className="text-[15px] mb-4 lg:mb-9">{product.attributes.title.substring(0, 35)}...</div>
          <div>${product.attributes.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
