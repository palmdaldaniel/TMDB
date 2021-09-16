import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { getPopular } from "../services/TMDBAPI";
import Spinner from "../components/Spinner";

const MostPopularMoviesPage = () => {
  const [query, setQuery] = useState("day");

  const { data, isLoading, isError, error } = useQuery(["popular", query], () =>
    getPopular(query)
  );

  return (
    <Container className="mt-4">
      {isError && <h1>{error}</h1>}

      {isLoading && <Spinner />}

      <div className="">
        <Button
          style={{ minWidth: "200px" }}
          onClick={() => setQuery("day")}
          disabled={query === "day"}
        >
          För dagen
        </Button>
        <Button
          style={{ minWidth: "200px" }}
          className="mx-4"
          onClick={() => setQuery("week")}
          disabled={query === "week"}
        >
          För veckan
        </Button>
      </div>

      <Row className="my-2">
        {data &&
          data.map((movie, i) => {
            return (
              <Col key={i} className="my-2" sm={12} md={6} lg={3}>
                <MovieCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default MostPopularMoviesPage;
