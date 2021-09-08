import React from "react";
import { Container } from "react-bootstrap";

import CinemaMovies from "../components/CinemaMovies";
import PopularMovies from '../components/PopularMovies'
import TopRankedMovies from '../components/TopRankedMovies'

const HomePage = () => {
  return (
    <Container>
      <h3 className="mt-3">Filmer på bio just nu</h3>
      <CinemaMovies />
      <h3 className="mt-3">Populäraste filmerna</h3>
      <PopularMovies />
      <h3 className="mt-3">Toprankade filmer</h3>
      <TopRankedMovies />
     

    </Container>
  );
};

export default HomePage;
