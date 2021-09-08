import React from "react";

import { Card, Button } from "react-bootstrap";

const prefix = "https://image.tmdb.org/t/p/w400/";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <Card style={{ width: "18rem" }} className="bg-dark text-white">
      <Card.Img src={`${prefix}${movie["poster_path"]}`} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview.slice(0, 100)} ...</Card.Text>
        <Card.Text>{`Släpps: ${movie["release_date"]}`}</Card.Text>
        <Button variant="primary">Läs mer</Button>
      </Card.ImgOverlay>
    </Card>
  );
};

export default MovieCard;
