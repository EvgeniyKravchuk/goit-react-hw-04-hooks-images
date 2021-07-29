import PropTypes from "prop-types";
import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { List } from "./ImageGallery.styled";
import { Section } from "../General/General.styled";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Modal from "../Modal/Modal";

export default class ImageGallery extends Component {
  state = {
    page: 1,
    modalUrl: "",
    modalIsOpen: false,
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  increasePage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  openModal = (evt) => {
    if (evt.target.nodeName === "IMG") {
      this.setState({
        modalIsOpen: true,
        modalUrl: evt.target.dataset.big_image,
      });
    }
  };

  closeModal = (evt) => {
    if (evt.target.nodeName === "DIV" || evt.code === "Escape") {
      this.setState({
        modalIsOpen: false,
      });
    }
  };

  render() {
    const { modalIsOpen, modalUrl, page } = this.state;
    const { search, hideLoader } = this.props;

    return (
      <>
        <Section>
          <List>
            <ImageGalleryItem
              openModal={this.openModal}
              hideLoader={hideLoader}
              search={search}
              page={page}
              scroll={this.scroll}
            />
          </List>
        </Section>
        <LoadMoreButton onClick={this.increasePage} />{" "}
        {modalIsOpen && <Modal url={modalUrl} closeModal={this.closeModal} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
