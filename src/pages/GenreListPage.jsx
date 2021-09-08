import React from "react";
import { Link } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenres } from "../services/TMDBAPI";
import Spinner from "../components/Spinner";

const GenreListPage = () => {
  const { data, isError, isLoading, error } = useQuery("genres", getGenres);

  if (isError) return <div className="text-center py-5">{error}</div>;

  return (
    <Container className="d-flex justify-content-center">
      <ListGroup variant="flush" style={{ width: "90%" }}>
        {isLoading && <Spinner />}
        {data &&
          data.genres.map((genre, i) => (
            <ListGroup.Item key={i}>
              <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
};

export default GenreListPage;
