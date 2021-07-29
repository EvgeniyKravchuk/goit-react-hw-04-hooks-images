import PropTypes from "prop-types";
import React, { Component } from "react";
import { Item, Image } from "./ImageGalleryItem.styled";

export default class ImageGalleryItem extends Component {
  state = {
    response: [],
    error: null,
  };

  componentDidMount() {
    const list = document.querySelector("ul");
    const { openModal } = this.props;

    this.fetchImagesByName();

    list.addEventListener("click", openModal);
  }

  componentDidUpdate(prevProps, prevState) {
    const { search, page, scroll } = this.props;

    if (prevProps.search !== search) {
      this.setState({
        response: [],
      });

      this.fetchImagesByName();
    }

    if (prevProps.page !== page) {
      this.fetchImagesByName().then(scroll);
    }
  }

  componentWillUnmount() {
    const list = document.querySelector("ul");
    const { openModal } = this.props;

    list.removeEventListener("click", openModal);
  }

  fetchImagesByName = () => {
    const API_KEY = "22542197-803b3827949c8e03dddadbe4d";
    const { search, page } = this.props;
    const errorMessage = `Изображений по ключевому слову ${search} не найдено`;

    return fetch(
      `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.hits.length === 0) {
          return Promise.reject(new Error(errorMessage));
        }
        return this.setState((prevState) => ({
          response: [...prevState.response, ...data.hits],
        }));
      })
      .catch((error) => alert(error.message))
      .finally(() => {
        this.props.hideLoader();
      });
  };

  render() {
    return this.state.response.map((item) => {
      const { id, webformatURL, tags, largeImageURL } = item;

      return (
        <Item key={id}>
          <Image src={webformatURL} alt={tags} data-big_image={largeImageURL} />
        </Item>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired,
};
