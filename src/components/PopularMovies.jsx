import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useQuery } from "react-query";
import { getPopular } from "../services/TMDBAPI";
import Spinner from "../components/Spinner";
import HomePageCard from "./HomePageCard";

const PopularMovies = () => {
  const { data, isLoading, isError, error } = useQuery("popular", () =>
    getPopular("week")
  );

  if (isError) return <div>{error}</div>;

  return (
    <Container>
      {isLoading && <Spinner />}
      <Row className='justify-content-around'>
        {data &&
          data.slice(0, 5).map((movie, i) => {
            return (
              <Col key={i} sm={12} md={2}>
                <HomePageCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default PopularMovies;
