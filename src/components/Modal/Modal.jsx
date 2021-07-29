import PropTypes from "prop-types";
import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Image } from "./Modal.styled";

const modalPortal = document.querySelector("#modal-root");

export default class Modal extends Component {
  ref = React.createRef();

  componentDidMount() {
    this.ref.current.addEventListener("click", this.props.closeModal);
    window.addEventListener("keydown", this.props.closeModal);
  }

  componentWillUnmount() {
    this.ref.current.removeEventListener("click", this.props.closeModal);
    window.removeEventListener("keydown", this.props.closeModal);
  }

  render() {
    return createPortal(
      <Backdrop ref={this.ref}>
        <Image src={this.props.url} alt="" />
      </Backdrop>,
      modalPortal
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
