import React from "react";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";
import { prefix, placeHoldeImage } from "../services/TMDBAPI";

const MovieCard = ({ movie }) => {
  return (
    <Card className="bg-dark text-white card-container m-2">
      <Card.Img src={movie["poster_path"] ? `${prefix}${movie["poster_path"]}` : `${placeHoldeImage}`} />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{`Släpps: ${movie["release_date"]}`}</Card.Text>
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
