import React from "react";
import { Container, Card, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getMovieById } from "../services/TMDBAPI";
import ActorsList from "../components/ActorsList";
import { prefix, placeHoldeImage } from "../services/TMDBAPI";
import { Link } from "react-router-dom";
import Spinner from '../components/Spinner'

import useLocalStorage from "../hooks/useLocalStorage";

const MoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["movie", id], () =>
    getMovieById(id)
  );

  // save browshistory history to local storage
  useLocalStorage("movies", data?.movie);

  return (
    <Container>
      {isError && <div>{error}</div>}
      {isLoading && <Spinner />}
      {data && (
        <>
          <Card
            style={{}}
            className="flex-row my-5"
            style={{ border: "none", maxWidth: "80%" }}
          >
            <Card.Img
              variant="top"
              style={{ width: "100px", height: "100%" }}
              src={data.movie["poster_path"] ? `${prefix}${data.movie["poster_path"]}` : placeHoldeImage }
              alt="Profile image"
            />
            <Card.Body className="align-self-end pb-0">
              <Card.Title>{data.movie.title}</Card.Title>
              <Card.Text>{data.movie.overview}</Card.Text>
            </Card.Body>
          </Card>
          <h3>Cast: </h3>
          <ActorsList actors={data.movie.credits.cast} />
        </>
      )}
      
      {data && data?.related.length > 0 && (

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            { data.related.map((movie, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <Link to={`/movie/${movie.id}`}>
                      {movie["original_title"]}
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default MoviePage;
