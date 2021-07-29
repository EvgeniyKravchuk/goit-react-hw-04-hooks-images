import React, { Component } from "react";
import { Wrapper } from "./components/General/General.styled";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loaders from "./components/Loader/Loader";

export default class App extends Component {
  state = {
    search: "",
    loaderAreShown: false,
  };

  handleSubmit = (evt) => {
    const inputValue = evt.target[0].value;
    this.setState((prevState) => ({
      loaderAreShown: true,
    }));

    evt.preventDefault();

    if (inputValue.trim() === "") {
      alert("Введите ключевое слово для поиска картинок");
      return;
    }

    this.setState({ search: inputValue });
    evt.target[0].value = "";
  };

  showLoader = () => {
    this.setState((prevState) => ({
      loaderAreShown: true,
    }));
  };

  hideLoader = () => {
    this.setState((prevState) => ({
      loaderAreShown: false,
    }));
  };

  render() {
    const { search, loaderAreShown } = this.state;
    const searchCheck = this.state.search === "";

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        {loaderAreShown && <Loaders />}
        {!searchCheck && (
          <ImageGallery search={search} hideLoader={this.hideLoader} />
        )}
      </Wrapper>
    );
  }
}
