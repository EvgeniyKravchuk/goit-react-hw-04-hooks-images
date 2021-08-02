import { useState } from "react";
import { Wrapper } from "./components/General/General.styled";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loaders from "./components/Loader/Loader";

export default function App() {
  const [search, setSearch] = useState("");
  const [loaderAreShown, setLoaderAreShown] = useState(false);

  const handleSubmit = (evt) => {
    const inputValue = evt.target[0].value;

    evt.preventDefault();

    setLoaderAreShown(true);

    if (inputValue.trim() === "") {
      alert("Введите ключевое слово для поиска картинок");
      return;
    }
    setSearch(inputValue);

    evt.target[0].value = "";
  };

  const searchCheck = search === "";
  return (
    <Wrapper>
      <Searchbar onSubmit={(evt) => handleSubmit(evt)} />
      {loaderAreShown && <Loaders />}
      {!searchCheck && (
        <ImageGallery
          search={search}
          hideLoader={() => setLoaderAreShown(false)}
        />
      )}
    </Wrapper>
  );
}
