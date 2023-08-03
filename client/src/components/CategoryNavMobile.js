import useFetch from "../hooks/useFetch";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch("/categories");

  return (
    <div className="w-full h-screen bg-primary/50 p-4 backdrop-blur-xl">
      {/* closed icon */}
      <div onClick={() => setCatNavMobile(false)} className="flex justify-end mb-8 cursor-pointer">
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
            <Link
              onClick={() => setCatNavMobile(false)}
              to={`/products/${category.id}`}
              className="font-meduim uppercase"
              key={category.id}>
              {category.attributes.title} cameras
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
