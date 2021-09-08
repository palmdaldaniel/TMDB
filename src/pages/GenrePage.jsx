import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getMoviesInGenre } from "../services/TMDBAPI";

const GenrePage = () => {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useQuery(["genre", id], () =>
    getMoviesInGenre(id)
  );

  return <Container>Give me some movvvvies in specific genre 🌵 </Container>;
};

export default GenrePage;
