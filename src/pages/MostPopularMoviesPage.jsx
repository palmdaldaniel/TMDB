import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { getPopular } from "../services/TMDBAPI";
import Spinner from "../components/Spinner";
import { sortInAscOrder } from "../utils/sortArrayInAsc";

const MostPopularMoviesPage = () => {
  const [query, setQuery] = useState("day");
  const [sortedData, setSortedData] = useState([]);

  const { data, isLoading, isError, error } = useQuery(["popular", query], () =>
    getPopular(query)
  );

  // sort by asc flag does not work on trending movies. Function sortInAscOrder runs and displays movies in ascending order by "vote-averag"
  useEffect(() => {
    if (data) {
      setSortedData(sortInAscOrder(data.results));
    }
  }, [data]);

  return (
    <Container className="mt-4">
      {isError && <h1>{error}</h1>}

      {isLoading && <Spinner />}

      <div className="d-flex flex-column ">
        <Button
          className="m-2"
          style={{ width: "10rem" }}
          onClick={() => setQuery("day")}
        >
          För dagen
        </Button>
        <Button
          className="m-2"
          style={{ width: "10rem" }}
          onClick={() => setQuery("week")}
        >
          För veckan
        </Button>
      </div>

      <Row className="justify-content-center">
        {sortedData &&
          sortedData.map((movie, i) => {
            return (
              <Col
                key={i}
                className="m-2"
                style={{ maxHeight: "500px" }}
                sm={12}
                md={4}
                lg={3}
              >
                <MovieCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default MostPopularMoviesPage;
