import { useContext, useState } from "react";
import { ImageContext } from "../App";
import PopupModal from "./PopupModal";

const Images = () => {
  const { response, searchImage } = useContext(ImageContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl, profileImage, name, userName, likes) => {
    setSelectedImage({ imageUrl, profileImage, name, userName, likes });
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <h1 className="mt-2 text-center text-3xl font-bold underline pb-8">
        Results for {searchImage || "Dogs"}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {response.map((data) => (
          <div
            key={data.id}
            onClick={() =>
              openModal(
                data.urls.small,
                data.user.profile_image.small,
                data.user.name,
                data.user.username,
                data.likes
              )
            }
          >
            <img
              className="h-72 w-full object-cover rounded-lg shadow-md cursor-pointer"
              src={data.urls.small}
              alt={data.alt_description}
            />
            <div className="flex relative">
              <img
                className="rounded-full mt-2"
                src={data.user.profile_image.small}
                alt="dp"
              />
              <h2 className="absolute top-1 left-10 text-s">
                {data.user.name}
              </h2>
              <h2 className="relative top-6 left-2 text-gray-400 font-poppins text-xs italic font-semibold">
                @{data.user.username}
              </h2>
              <img
                className="relative top-3.5 left-28 w-4 h-4 mr-0.5"
                src="/assets/like.png"
                alt="car"
              />
              <h2 className="relative top-3.5 left-28 text-xs font-medium">
                {data.likes}K
              </h2>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <PopupModal
          imageUrl={selectedImage.imageUrl}
          profileImage={selectedImage.profileImage}
          name={selectedImage.name}
          userName={selectedImage.userName}
          likes={selectedImage.likes}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Images;
