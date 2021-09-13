import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import { useQueryContext } from "../contexts/QueryContextProvider";

const SearchForm = ({ handleFormSubmit }) => {
  const { inputText } = useQueryContext();

  const [text, setText] = useState(inputText);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(text);
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
        <Button type="submit" onSubmit={handleSubmit}>
          {" "}
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
