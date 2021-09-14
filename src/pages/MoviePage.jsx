import React from "react";
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getMovieById } from "../services/TMDBAPI";
import ActorsList from "../components/ActorsList";
import { prefix } from "../services/TMDBAPI";
import { Link } from "react-router-dom";

import  useLocalStorage from "../hooks/useLocalStorage";

const MoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["movie", id], () =>
    getMovieById(id)
  );


  // save browshistory history to local storage

  useLocalStorage('movies', data?.movie)

  






  if (isError) return <div>{error}</div>;

  return (
    <Container>
      {data && (
        <>
          <Card
            style={{}}
            className="flex-row my-5 mx-auto"
            style={{ border: "none", maxWidth: "80%" }}
          >
            <Card.Img
              variant="top"
              style={{ width: "200px", height: "100%" }}
              src={`${prefix}${data.movie["poster_path"]}`}
              alt="Profile image"
            />
            <Card.Body className="align-self-end pb-0">
              <Card.Title>{data.movie.title}</Card.Title>
              <Card.Text>{data.movie.overview}</Card.Text>
            </Card.Body>
          </Card>
          <ActorsList actors={data.movie.credits.cast} />
        </>
      )}
      <ListGroup>
        {data &&
          data.related.map((movie, i) => (
            <ListGroup.Item key={i}>
              <Link to={`/movie/${movie.id}`}>{movie["original_title"]}</Link>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
};

export default MoviePage;
