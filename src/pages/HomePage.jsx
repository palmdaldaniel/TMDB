import React, { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useHistory } from "react-router";

import CinemaMovies from "../components/CinemaMovies";
import PopularMovies from "../components/PopularMovies";
import SearchForm from "../components/SearchForm";
import TopRankedMovies from "../components/TopRankedMovies";
import { useQueryContext } from "../contexts/QueryContextProvider";
import HistoryList from "../components/HistoryList";

const HomePage = () => {
  const { inputText, setInputText } = useQueryContext();

  const history = useHistory();

  useEffect(() => {
    setInputText('')

  },[])

  const handleFormSubmit = (query) => {
    setInputText(query);
    history.push("/search");
  };

  return (
    <Container>
      <SearchForm query={inputText} handleFormSubmit={handleFormSubmit} />
      <div className="d-md-flex justify-content-md-around">
        <div>
          <h3 className="mt-5">Movies On Cinema Right Now</h3>
          <CinemaMovies />
          <h3 className="mt-5">Popular Movies</h3>
          <PopularMovies />
          <h3 className="mt-5">Top Rated Movies</h3>
          <TopRankedMovies />
        </div>
        <HistoryList />
      </div>
    </Container>
  );
};

export default HomePage;
