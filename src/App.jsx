import { createContext, useState } from "react";
import useAxios from "./AxiosHook/useAxios";
import SearchField from "./component/SearchField";
import Navbar from "./component/Navbar";
import Images from "./component/Images";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, error, fetchData } = useAxios(
    `search/photos?page=1&query=dogs&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const value = {
    response,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Navbar>
        <SearchField />
      </Navbar>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
