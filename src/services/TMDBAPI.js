/**
 * TMDB REST API Service
 *
 * Reference: https://developers.themoviedb.org/3/getting-started/introduction
 *
 */

import axios from "axios";
import { sortInAscOrder } from "../utils/sortArrayInAsc";

const apiKey = "0dd7b23e90e1f5fb99986582b77937d0";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

/**
 *
 * Get get movies with various endpoints
 * returns a @promise
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
 *
 */

export const getPopular = async () => {
  const data = await get(`/movie/popular?api_key=${apiKey}&region=se`);

  // sort returning data in ascending order based on vote-average
  const sorted = sortInAscOrder(data?.data?.results);

  return sorted;
};

/**
 * 
 * get top rated movies in sweden
 */

export const getTopRated = async () => {
  const data = await get(`/movie/top_rated?api_key=${apiKey}&region=se`);

  return data.data;
};

export const getGenres = async () => {
  const data = await get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
  
  return data.data

}
