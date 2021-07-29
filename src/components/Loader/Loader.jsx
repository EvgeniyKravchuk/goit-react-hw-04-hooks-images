import Loader from "react-loader-spinner";
import { Section } from "../General/General.styled";

export default function Loaders() {
  return (
    <Section>
      <Loader type="ThreeDots" color="#18166b" height={80} width={80} />;
    </Section>
  );
}
