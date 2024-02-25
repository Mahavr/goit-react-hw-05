import axios from "axios";
// axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTgwMjNkMzYxZWY1N2IyMDE0OWNlNGQ0YTA4OWY2YyIsInN1YiI6IjY1ZDYwMGRiZTZkM2NjMDE3YmMwOTJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ajuHj2nqbCelnfpPcDVjYkYFjw85rZ3IMTRSO0prP4w",
  },
};
export const getTrending = async ({ abortController }) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options,
    {
      signal: abortController.signal,
    }
  );
  return response.data.results;
};
export const getMovieById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};
export const getMovieCast = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};
export const getMovieReview = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return response.data.results;
};
export const getMovieSearch = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
};
