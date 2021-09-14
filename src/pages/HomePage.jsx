import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";

import CinemaMovies from "../components/CinemaMovies";
import PopularMovies from "../components/PopularMovies";
import SearchForm from "../components/SearchForm";
import TopRankedMovies from "../components/TopRankedMovies";
import { useQueryContext } from "../contexts/QueryContextProvider";
import HistoryList from '../components/HistoryList'

const HomePage = () => {
  const { setInputText } = useQueryContext();

  const history = useHistory();

  const handleFormSubmit = (query) => {
    setInputText(query);
    history.push("/search");
  };

  return (
    <Container>
      <HistoryList />
      <SearchForm handleFormSubmit={handleFormSubmit} />
      <h3 className="mt-5">Filmer på bio just nu</h3>
      <CinemaMovies />
      <h3 className="mt-5">Populäraste filmerna</h3>
      <PopularMovies />
      <h3 className="mt-5">Topprankade filmer</h3>
      <TopRankedMovies />
    </Container>
  );
};

export default HomePage;
