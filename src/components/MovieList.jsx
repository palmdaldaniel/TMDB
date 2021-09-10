import React from "react";
import { Row, Col, ListGroup, Image, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const prefix = "https://image.tmdb.org/t/p/w400/";

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <ListGroup>
      <Row>
        {movies.results.map((movie, i) => {
          return (
            <ListGroupItem key={i}>
              <Link to={`/movie/${movie.id}`}>{movie["original_title"]}</Link>
            </ListGroupItem>
          );
        })}
      </Row>
    </ListGroup>
  );
};

export default MovieList;
