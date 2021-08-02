import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Image } from "./Modal.styled";

const modalPortal = document.querySelector("#modal-root");

export default function Modal({ url, closeModal }) {
  useEffect(() => {
    const backdropRef = document.querySelector(".backdrop");

    backdropRef.addEventListener("click", closeModal);
    window.addEventListener("keydown", closeModal);

    return () => {
      backdropRef.removeEventListener("click", closeModal);
      window.removeEventListener("keydown", closeModal);
    };
  });

  return createPortal(
    <Backdrop className="backdrop">
      <Image src={url} alt="" />
    </Backdrop>,
    modalPortal
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
