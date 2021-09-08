import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useQuery } from "react-query";
import { getTopRated } from "../services/TMDBAPI";
import Spinner from "../components/Spinner";
import MovieCard from "./MovieCard";
const TopRankedMovies = () => {

  // fetch movies that is top ranked in sweden
  const { data, isLoading, isError, error } = useQuery(
    "top-rated",
    getTopRated
  );

  if (isError) return <div>{error}</div>;

  return (
    <Container>
      {isLoading && <Spinner />}
      <Row>
        {data &&
          data.results.slice(0, 4).map((movie, i) => {
            return (
              <Col key={i} sm={12} md={3}>
                <MovieCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default TopRankedMovies;
