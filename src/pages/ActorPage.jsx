import React from "react";
import { Container, Card } from "react-bootstrap";
import { getActorById } from "../services/TMDBAPI";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Spinner from "../components/Spinner";
import MovieList from "../components/MovieList";
import { prefix } from "../services/TMDBAPI";


const ActorPage = () => {
  const { id } = useParams();

  const { data, isError, error, isLoading } = useQuery(["actor", id], () =>
    getActorById(id)
  );


  return (
    <Container>
      {isError && <div>{error}</div>}
      {isLoading && <Spinner />}

      {data && (
        <>
          <Card style={{ width: "80%" }} className="flex-row">
            <Card.Img
              variant="top"
              src={`${prefix}${data.actor["profile_path"]}`}
            />
            <Card.Body>
              <Card.Title>{data.actor.name}</Card.Title>
              <Card.Text>Bio: {data.actor.biography}</Card.Text>
              <Card.Text>
                {data["place_of_birth"] &&
                  `Place of Birth: data["place_of_birth"]`}
              </Card.Text>
            </Card.Body>
          </Card>

          <MovieList movies={data.movies} />
        </>
      )}
    </Container>
  );
};

export default ActorPage;
