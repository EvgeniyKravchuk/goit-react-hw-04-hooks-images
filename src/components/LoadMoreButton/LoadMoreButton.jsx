import PropTypes from "prop-types";
import { Btn } from "./LoadMoreButton.styled";
import { Section } from "../General/General.styled";

export default function LoadMoreButton({ onClick }) {
  return (
    <Section>
      <Btn type="button" onClick={onClick}>
        Еще...
      </Btn>
      ;
    </Section>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
