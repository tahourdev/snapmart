import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
// use navigate hook
import { useNavigate } from "react-router-dom";
const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    // clear timeout event
    return () => clearTimeout(timeout);
  });

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      // document.querySelector("input").value = "";
      setSearchTerm("");
      setSearchTerm("");
    } else {
      // if input is empty set animation to true
      setIsAnimating(true);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${isAnimating ? "animate-shake" : "animate-none"} relative xl:w-full`}>
      <input
        value={searchTerm}
        onChange={searchHandler}
        className="input"
        type="text"
        placeholder="Search for a product..."
      />
      <button className="btn-accent btn absolute top-0 flex justify-center items-center right-0 rounded-l-none">
        <FiSearch className="text-xl cursor-pointer" />
      </button>
    </form>
  );
};

export default SearchForm;
