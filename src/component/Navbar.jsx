import React from "react";

const Navbar = ({ children }) => {
  return (
    <>
      <div className="bg-gray-900 flex items-center py-10">
        <h1 className="relative bottom-14 left-5 text-white text-xl p-0">
          Image Gallery
        </h1>
        <div className="relative right-14 max-w-md mx-auto w-full">
          <h1 className="text-white text-center text-2xl font-bold mb-5">
            Find Images
          </h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default Navbar;
