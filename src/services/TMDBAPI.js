/**
 * TMDB REST API Service
 *
 * Reference: https://developers.themoviedb.org/3/getting-started/introduction
 */

import axios from "axios";
import { sortInAscOrder } from "../utils/sortArrayInAsc";

const apiKey = "0dd7b23e90e1f5fb99986582b77937d0";
// prefix for relative img path
export const prefix = "https://image.tmdb.org/t/p/w400/";
//place holder image

export const placeHoldeImage = "https://via.placeholder.com/400"
axios.defaults.baseURL = "https://api.themoviedb.org/3";

/**
 *
 * Get get movies with various endpoints
 *
 */
const get = async (endpoint) => {
  const data = await axios.get(endpoint);
  return data;
};

/**
 *
 * get movies playing on cinema in sweden right now
 *
 */
export const getNowPlaying = async () => {
  const data = await get(`/movie/now_playing?api_key=${apiKey}&region=se`);
  return data.data;
};

/**
 *
 * get most popular movies  in sweden right now
 */

export const getPopular = async (query) => {
  const data = await get(
    `/trending/movie/${query}?api_key=${apiKey}&sort_by=vote_average.desc&vote_count.gte=1000&&region=se`
  );

  const { results } = data.data;

  // sort data in ascending order based on vote average because there are no such flags for trending endpoints
  const sortedData = sortInAscOrder(results);

  return sortedData;
};

/**
 * get top rated movies in sweden
 */
export const getTopRated = async () => {
  const data = await get(`/movie/top_rated?api_key=${apiKey}&region=se`);

  return data.data;
};

// get list of genres
export const getGenres = async () => {
  const data = await get(`/genre/movie/list?api_key=${apiKey}`);

  return data.data;
};

//get movies by genre
export const getMoviesInGenre = async (genreId, page) => {
  const data = await get(
    `/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`
  );

  return data.data;
};

// get movie by id
export const getMovieById = async (id) => {
  const data = await get(
    `/movie/${id}?&append_to_response=credits&api_key=${apiKey}`
  );

  const similar = await getSimalarMovies(id);

  return {related: similar, movie: data.data};
};

//get 5 most popular similar movies,
const getSimalarMovies = async (movieId) => {

  const data = await get(
    `/movie/${movieId}/similar?api_key=0dd7b23e90e1f5fb99986582b77937d0&language=en-US`
  );
  // return the top 5 most popular movies 
  return sortInAscOrder(data.data.results).slice(0,5);
};

const getMoviesForActor = async (id) => {
  const data = await get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_people=${id}`
  );

  return data.data;
};

// get actor by id
export const getActorById = async (id) => {
  const data = await get(`/person/${id}?api_key=${apiKey}`);
  // make request for the actors movies and combine in respons.
  const movies = await getMoviesForActor(id);
  return { movies, actor: data.data };
};

// serach for a movie by title
export const getMoviesByQuery = async (query) => {

  if (!query.q) return;
  const data = await get(
    `/search/movie?api_key=${apiKey}&query=${query.q}&page=${query.page}`
  );

  return data.data;
};
