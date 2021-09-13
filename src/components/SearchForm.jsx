import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

import { useQueryContext } from "../contexts/QueryContextProvider";

const SearchForm = () => {
  
  const { inputText, setInputText } = useQueryContext();

  const [text, setText] = useState("");

  const history = useHistory();

  // get pathname in order to determine if you want to run history.push or not.
  const { pathname } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pathname === "/") {
      setInputText(text);
      history.push("/search");
    } else setInputText(text);

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
