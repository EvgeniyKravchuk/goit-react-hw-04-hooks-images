import PropTypes from "prop-types";
import { Form, Input, Header, Button } from "./Searchbar.styled";
import { FcSearch } from "react-icons/fc";

export default function Searchbar({ onSubmit }) {
  return (
    <Header>
      <Form onSubmit={onSubmit} name="search">
        <Input
          name="search"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Введите название для поиска"
        />
        <Button type="submit">
          <FcSearch />
        </Button>
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
