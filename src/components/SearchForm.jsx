import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import { useQueryContext } from "../contexts/QueryContextProvider";

const SearchForm = ({ handleFormSubmit, query }) => {
  
  
  //const { inputText } = useQueryContext();

  const [text, setText] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(text);
  };

  return (
    <Form onSubmit={handleSubmit} className="m-3">
      <Form.Group
        className="d-flex
      "
        controlId="search"
      >
        <Form.Control
          className="mx-auto m-1"
          type="text"
          placeholder="Search for movie by title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="m-1" type="submit" onSubmit={handleSubmit}>
          {" "}
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
