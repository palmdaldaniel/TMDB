import React from "react";
import { Container } from "react-bootstrap";

import CinemaMovies from "../components/CinemaMovies";
import PopularMovies from '../components/PopularMovies'
import SearchForm from "../components/SearchForm";
import TopRankedMovies from '../components/TopRankedMovies'


const HomePage = () => {
  return (
    <Container>
    {/*   <SearchForm /> */}
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
