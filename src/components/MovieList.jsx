import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <Table
      striped
      bordered
      hover
      className="mx-auto m-3"
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Moives</th>
        </tr>
      </thead>
      <tbody>
        {movies.results.slice(0, 5).map((movie, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <Link to={`/movie/${movie.id}`}>{movie["original_title"]}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MovieList;
