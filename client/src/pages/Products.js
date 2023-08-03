import React, { useState, useEffect } from "react";
//useParams hook
import { useParams } from "react-router-dom";
// useFetch
import useFetch from "../hooks/useFetch";
// import components
import { CategoryNav, Product } from "../components";

const Products = () => {
  const [title, setTitle] = useState(null);
  const { id } = useParams();
  //get product base on category id
  const { data } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);

  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  });

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-8">
          <CategoryNav />
          <main>
            {/* title */}
            <div className="mb-4 py-2 lg:text-left text-center text-xl uppercase border border-b-1 border-slate-200/50 border-l-0 border-r-0 border-t-0">
              {title}
            </div>
            {/* product grid */}
            <div className="grid grid-cols-2 w-full gap-4 md:gap-8 md:grid-cols-3 xl:grid-cols-4">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
