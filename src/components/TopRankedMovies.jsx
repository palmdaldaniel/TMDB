import React from "react";
import { Row, Col } from "react-bootstrap";

import { useQuery } from "react-query";
import { getTopRated } from "../services/TMDBAPI";
import Spinner from "../components/Spinner";
import HomePageCard from "./HomePageCard";
const TopRankedMovies = () => {

  const { data, isLoading, isError, error } = useQuery(
    "top-rated",
    getTopRated
  );

  if (isError) return <div>{error}</div>;

  return (
    <>
      {isLoading && <Spinner />}
      <Row className="justify-content-sm-around">
        {data &&
          data.results.slice(0, 4).map((movie, i) => {
            return (
              <Col key={i} xs={12} md={6} lg={3} >
                <HomePageCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default TopRankedMovies;
