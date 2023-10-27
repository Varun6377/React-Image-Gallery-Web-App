import React, { useContext, useState, useEffect } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      if (searchValue) {
        fetchData(
          `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
        );
        setSearchImage(searchValue);
      }
    }, 300);

    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchValue]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-sm"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchField;
