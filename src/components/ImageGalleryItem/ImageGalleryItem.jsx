import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Item, Image } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({
  search,
  page,
  setPage,
  scroll,
  hideLoader,
  openModal,
}) {
  const [response, setRespone] = useState([]);
  var mainPage = page;

  useEffect(() => {
    const list = document.querySelector("ul");

    list.addEventListener("click", openModal);

    return () => {
      list.removeEventListener("click", openModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mainPage = 1;
    setRespone([]);
    fetchImagesByName();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    fetchImagesByName().then(scroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchImagesByName = () => {
    const API_KEY = "22542197-803b3827949c8e03dddadbe4d";
    const errorMessage = `Изображений по ключевому слову ${search} не найдено`;
    return fetch(
      `https://pixabay.com/api/?q=${search}&page=${mainPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.hits.length === 0) {
          return Promise.reject(new Error(errorMessage));
        }

        return setRespone((response) => [...response, ...data.hits]);
      })
      .catch((error) => alert(error.message))
      .finally(() => {
        hideLoader();
      });
  };

  return response.map((item) => {
    const { id, webformatURL, tags, largeImageURL } = item;

    return (
      <Item key={id}>
        <Image src={webformatURL} alt={tags} data-big_image={largeImageURL} />
      </Item>
    );
  });
}

ImageGalleryItem.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired,
};
