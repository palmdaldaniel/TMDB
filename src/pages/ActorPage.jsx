import React from "react";
import { Container, Card } from "react-bootstrap";
import { getActorById } from "../services/TMDBAPI";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Spinner from "../components/Spinner";
import MovieList from "../components/MovieList";
import { prefix, placeHoldeImage } from "../services/TMDBAPI";

const ActorPage = () => {
  const { id } = useParams();

  const { data, isError, error, isLoading } = useQuery(["actor", id], () =>
    getActorById(id)
  );

  return (
    <Container style={{ maxWidth: "80%" }} className="mx-auto">
      {isError && <div>{error}</div>}
      {isLoading && <Spinner />}

      {data && (
        <>
          <Card style={{ border: "none" }} className="my-3">
            <Card.Img
            className="my-3 p-3 mx-auto"
              style={{ minWidth: "100px", maxWidth: "400px" }}
              variant="top"
              src={
                data.actor["profile_path"]
                  ? `${prefix}${data.actor["profile_path"]}`
                  : `${placeHoldeImage}`
              }
            />
            <Card.Body className='p-0'>
              <Card.Title>{data.actor.name}</Card.Title>
              <Card.Text>
                <span style={{ fontWeight: "bold" }}>Bio:</span>{" "}
                {data.actor.biography.slice(0, 400)} ...
              </Card.Text>
            </Card.Body>
          </Card>

          <h3> 🌟 Starred in:</h3>
          <MovieList movies={data.movies} />
        </>
      )}
    </Container>
  );
};

export default ActorPage;
