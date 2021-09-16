import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const SearchForm = ({ handleFormSubmit, query }) => {
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setText(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length < 3) {
      setToggle(true);
      return;
    }

    setToggle(false);
    handleFormSubmit(text);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group className="d-sm-flex" controlId="search">
        <Form.Control
          style={{ width: "80%" }}
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
      {toggle && (
        <Alert
          className="my-3 text-center mx-auto"
          style={{ width: "60%" }}
          variant="warning"
        >
          Pleace enter more than two characters
        </Alert>
      )}
    </Form>
  );
};

export default SearchForm;
