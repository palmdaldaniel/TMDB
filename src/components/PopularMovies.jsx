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
    <>
      {isLoading && <Spinner />}
      <Row className='justify-content-sm-around'>
        {data &&
          data.slice(0, 4).map((movie, i) => {
            return (
              <Col key={i} md={6} lg={3}>
                <HomePageCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default PopularMovies;
