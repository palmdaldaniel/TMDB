import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getMoviesInGenre } from "../services/TMDBAPI";
import Spinner from '../components/Spinner'
import MovieCard from "../components/MovieCard";
import Pagination from "./partials/Pagination";


const GenrePage = () => {
  const [page, setPage] = useState(1)
  const { id } = useParams();

  const { data, isError, isLoading, error } = useQuery(["genre", id], () =>
    getMoviesInGenre(id)
  );

  if (isError) return <div>{error}</div>;

  return (
    <Container>
      {isLoading && <Spinner />}
      <Pagination page={page} setPage={setPage} />
      <Row>
        {data &&
          data.results.map((movie, i) => {
            return (
              <Col className="p-4" key={i} sm={12} md={3}>
                <MovieCard movie={movie} />{" "}
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default GenrePage;
