import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

const SearchForm = ({ handleFormSubmit, query }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(text);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group
        className="d-sm-flex"
        controlId="search"
      >
        <Form.Control
          style={{width: '80%'}}
          className="m-1"
          type="text"
          placeholder="Search for movie by title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="m-1 px-4" type="submit" onSubmit={handleSubmit}>
          Sök! 🚀 
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
