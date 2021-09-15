import React from "react";
import { Container } from "react-bootstrap";

import { useQuery } from "react-query";
import { getNowPlaying } from "../services/TMDBAPI";

import Spinner from "../components/Spinner";
import MovieCard from "./MovieCard";

import { Row, Col } from "react-bootstrap";
import HomePageCard from '../components/HomePageCard'

const CinemaMovies = () => {
  // fetch movies that is currently playing on cinema in sweden
  const { data, isLoading, isError, error } = useQuery(
    "now-playing",
    getNowPlaying
  );

  if (isError) return <div>{error}</div>;

  return (
      <>
      {isLoading && <Spinner />}
      <Row className="justify-content-sm-around">
        {data &&
          data.results.slice(0, 4).map((movie, i) => {
            return (
              <Col key={i} md={6} lg={3} >
                <HomePageCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default CinemaMovies;
