import React from "react";
import { Link } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenres } from "../services/TMDBAPI";
import Spinner from "../components/Spinner";

const GenrePage = () => {
  const { data, isError, isLoading, error } = useQuery("genres", getGenres);

  if (isError) return <div className="text-center py-5">{error}</div>;

  return (
    <Container>
      <ListGroup variant="flush">
        {isLoading && <Spinner />}
        {data &&
          data.genres.map((genre, i) => (
            <ListGroup.Item key={i}>
              <Link to="/">{genre.name}</Link>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
};

export default GenrePage;