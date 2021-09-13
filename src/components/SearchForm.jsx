import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchForm = ({ queryMovie, query }) => {
  

  const [text, setText] = useState(query);


  const handleSubmit = (e) => {
    e.preventDefault();
    queryMovie(text);
    setText('')
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
