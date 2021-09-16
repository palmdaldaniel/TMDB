import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom'
import useLocalStorage from "../hooks/useLocalStorage";

const HistoryList = () => {
  const [value] = useLocalStorage("movies");    

  return (
    <ListGroup className="mt-5 p-4" style={{minWidth: '300px'}}>
      {value && <h5>History</h5>}
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
