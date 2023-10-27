import React, { useContext } from "react";
import { ImageContext } from "../App";

const Modal = ({ imageUrl, profileImage, name, userName, likes, onClose }) => {
  const { searchImage } = useContext(ImageContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur z-50-">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-xl ">
        <div className="relative">
          <img
            src={imageUrl}
            alt="Modal"
            className="w-full max-h-[80vh] object-cover rounded-t-lg"
          />
          <button
            className="absolute top-0 right-0 border-none cursor-pointer z-50"
            onClick={onClose}
          >
            <img src="/assets/Group 25.svg" alt="close" />
          </button>
        </div>
        <div className="relative mb-5">
          <div className="flex">
            <img
              className="w-12 relative top-3 ml-2 rounded-full mt-0"
              src={profileImage}
              alt="dp"
            />
            <h2 className="relative top-5 ml-2 text-s text-center">{name}</h2>
            <div className="relative top-5 ml-9 flex">
              <img
                className="w-5 h-5"
                src="./assets/icons8-instagram-48.png"
                alt="instagram"
              />
              <h2 className="p-0 text-gray-400 font-poppins text-xs italic font-semibold">
                @{userName}
              </h2>
            </div>
            <div className="relative top-1 ml-9 flex mt-4">
              <img
                className="w-5 h-5"
                src="./assets/icons8-twitter-48.png"
                alt="twitter"
              />
              <h2 className="p-0 text-gray-400 font-poppins text-xs italic font-semibold">
                @{userName}
              </h2>
            </div>
            <img
              className="relative top-4 w-5 h-5 ml-12"
              src="/assets/like.png"
              alt="like"
            />
            <h2 className="relative top-3 text-s font-medium">{likes}K</h2>
          </div>
          <div className="flex mt-6 ml-14">
            <h2 className="font-bold">Related Tags:</h2>
            <h2 className="relative ml-12">{searchImage || "Dogs"} images</h2>
            <h2 className="relative ml-12">{searchImage || "Dogs"} pictures</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
