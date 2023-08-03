import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch("/categories");

  // console.log(data);
  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[280px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="text-primary bg-accent py-4 uppercase font-semibold flex items-center justify-center">
          Browse Category
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className="uppercase max-w-fit relative line"
                key={category.id}>
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
