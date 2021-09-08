import React from "react";
import { Container } from "react-bootstrap";

import { useQuery } from "react-query";
import { getNowPlaying } from "../services/TMDBAPI";

import Spinner from "../components/Spinner";
import MovieCard from "./MovieCard";

import {Row, Col} from 'react-bootstrap'

const CinemaMovies = () => {
  const { data, isLoading, isError, error } = useQuery(
    "now-playing",
    getNowPlaying
  );

  console.log(data);

  if (isError) return <div>{error}</div>;

  return (
    <Container>
        {isLoading && <Spinner />}
        <Row>
      {data && data.results.slice(0,4).map((movie, i) => {
         return <Col sm={12} md={3}> <MovieCard key={i} movie={movie} /> </Col>
      })}
      </Row>
      
    </Container>
  );
};

export default CinemaMovies;
