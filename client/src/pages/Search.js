import React from "react";
// useLocation hook
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
//import component
import { CategoryNav, Product } from "../components";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");

  // Get product base on search
  // const { data } = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`);
  const { data } = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`);

  return (
    <div className="mb-[30px] pt-40 lg:pt-8 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-8">
          {/* category nav */}
          <CategoryNav />
          <div>
            <div className="mb-4 py-2 lg:text-left text-center text-xl uppercase border border-b-1 border-slate-200/50 border-l-0 border-r-0 border-t-0">
              {data?.length > 0
                ? `${data.length} results for ${searchTerm}`
                : `No result found for ${searchTerm}`}
            </div>
            {/* grid */}
            <div className="grid grid-cols-2 w-full gap-4 md:gap-8 md:grid-cols-3 xl:grid-cols-4">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
