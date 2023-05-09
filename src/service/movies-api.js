import axios from 'axios';

const URL = 'https://api.themoviedb.org';
const KEY = 'api_key=345007f9ab440e5b86cef51be6397df1';

export const getMovieTrending = async () => {
  const responsive = await axios.get(`${URL}/3/trending/movie/week?${KEY}`);

  return responsive.data;
};

export const getSearchMovie = async search => {
  const responsive = await axios.get(
    `${URL}/3/search/movie?${KEY}&query=${search}`
  );

  return responsive.data;
};

export const getDetailsMovie = async movieId => {
  const responsive = await axios.get(`${URL}/3/movie/${movieId}?${KEY}`);

  return responsive.data;
};

export const getCastMovie = async movieId => {
  const responsive = await axios.get(
    `${URL}/3/movie/${movieId}/credits?${KEY}`
  );

  return responsive.data;
};

export const getReviewsMovie = async movieId => {
  const responsive = await axios.get(
    `${URL}/3/movie/${movieId}/reviews?${KEY}`
  );

  return responsive.data;
};
