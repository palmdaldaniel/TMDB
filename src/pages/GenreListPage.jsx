import React from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenres } from "../services/TMDBAPI";
import Spinner from "../components/Spinner";

const GenreListPage = () => {
  const { data, isError, isLoading, error } = useQuery("genres", getGenres);

  return (
    <Container>
      {isError && <div className="text-center py-5">{error}</div>}
      {isLoading && <Spinner />}
      <h3 style={{ maxWidth: "80%" }} className="mx-auto m-2">Pick a genre you like!</h3>
      <Table
        striped
        bordered
        hover
        className="mx-auto m-3"
        style={{ maxWidth: "80%" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.genres.map((genre, i) => (
              <tr key={i}>
                <td style={{ width: "100px" }}> {i + 1}</td>
                <td>
                  <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GenreListPage;
