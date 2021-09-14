import React from "react";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";
import { prefix } from "../services/TMDBAPI";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "10em" }} className="bg-dark text-white">
      <Card.Img src={`${prefix}${movie["poster_path"]}`} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
        <Card.Title style={{ fontSize: "1rem" }}>{movie.title}</Card.Title>
        <Card.Text>{`Rating: ${movie["vote_average"]}`}</Card.Text>
        <Link to={`/movie/${movie.id}`}>
          <Button style={{ width: "100%" }} variant="primary">
            Gå till film 👣
          </Button>
        </Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default MovieCard;
