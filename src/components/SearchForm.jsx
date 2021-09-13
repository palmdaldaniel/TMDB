import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const SearchForm = ({ query }) => {
  // if prop query is defined set form value to query else set form value to empty string ''
  const [text, setText] = useState(!query ? "" : query);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(text);
    history.push(`/search/${text}`);
  };

  return (
    <Form onSubmit={handleSubmit} className="m-3">
      <Form.Group className="mb-3" controlId="search">
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Search for movie title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
