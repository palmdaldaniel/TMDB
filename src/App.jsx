import React, { useState } from "react";
import Navigation from "./pages/partials/Navigation";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GenreListPage from "./pages/GenreListPage";
import GenrePage from "./pages/GenrePage";
import MoviePage from  "./pages/MoviePage";
import MoviesOnCinemaPage from "./pages/MoviesOnCinemaPage";
import TopRatedMoviesPage from "./pages/TopRatedMovies";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
        <Route path="/genre/:id">
          <GenrePage />
        </Route>
        <Route path="/genre">
          <GenreListPage />
        </Route>
        <Route path="/cinema">
          <MoviesOnCinemaPage />
        </Route>
        <Route path="/top-rated">
          <TopRatedMoviesPage />
    
        </Route>
      </Switch>
    </div>
  );
}

export default App;
