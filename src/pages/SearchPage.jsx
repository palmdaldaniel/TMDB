import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import { useUrlSearchParams } from "use-url-search-params";
import { getMoviesByQuery } from "../services/TMDBAPI";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";
import MovieCard from "../components/MovieCard";
import Pagination from "./partials/Pagination";

const Searchpage = () => {
  const [params, setParams] = useUrlSearchParams(
    { page: 1, q: "" },
    { page: Number }
  );

  const [searchQuery, setSearchQuery] = useState("");

  const [page, setPage] = useState(params.page);

  const { data, isLoading, isError, error, isPreviousData } = useQuery(["movies", params], () =>
    getMoviesByQuery(params),
    {
      keepPreviousData: true
    }
  );

  console.log(data);
  const queryMovie = (query) => {

    setSearchQuery(query);
    setPage(1)

  };

  useEffect(() => {
    setParams({ ...params,
               page,
               q: searchQuery });
  }, [page, searchQuery]);

  if (isError) return <div>{error}</div>;

  return (
    <Container>
      <SearchForm queryMovie={queryMovie} query={params.q} />
      {isLoading && <Spinner />}
      <Row>
        {data && data.results.length === 0 ? (
          <div>Sry nothing matches you search</div>
        ) : (
          data?.results.map((movie, i) => {
            return (
              <Col key={i} sm={12} md={3}>
                <MovieCard movie={movie} />
              </Col>
            );
          })
        )}
       { data && data['total_pages'] > 1 &&
        <Pagination
          page={page}
          setPage={setPage}
          isPreviousData={isPreviousData}
          total={data['total_pages']}
        />}
      </Row>
    </Container>
  );
};

export default Searchpage;
