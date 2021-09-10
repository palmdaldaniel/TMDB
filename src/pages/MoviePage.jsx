import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getMovieById } from "../services/TMDBAPI";
import ActorsList from "../components/ActorsList";

const prefix = "https://image.tmdb.org/t/p/w400/";

const MoviePage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(["movie", id], () =>
    getMovieById(id)
  );

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
              src={`${prefix}${data["poster_path"]}`}
            />
            <Card.Body className="align-self-end pb-0">
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.overview}</Card.Text>
            </Card.Body>
          </Card>
          <ActorsList actors={data.credits.cast} />
        </>
      )}
    </Container>
  );
};

export default MoviePage;
