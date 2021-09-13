import React from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router";
import SearchForm from "../components/SearchForm";

const Searchpage = () => {
  const { query } = useParams();
  return (
    <Container>
      <SearchForm query={query} />
    </Container>
  );
};

export default Searchpage;
