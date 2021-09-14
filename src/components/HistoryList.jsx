import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom'
import useLocalStorage from "../hooks/useLocalStorage";

const HistoryList = () => {
  const [value] = useLocalStorage("movies");

  return (
    <ListGroup>
      {value &&
        value.map((movie, i) => {
          return (
            <Link key={i} to={`/movie/${movie.id}`}>
              {movie["original_title"]}
            </Link>
          );
        })}
    </ListGroup>
  );
};

export default HistoryList;
