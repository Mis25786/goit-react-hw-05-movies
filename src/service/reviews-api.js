import axios from 'axios';

const URL = 'https://api.themoviedb.org';
const KEY = 'api_key=345007f9ab440e5b86cef51be6397df1';

const getReviewsMovie = async () => {
  // const getReviewsMovie = async movieId => {
  const responsive = await axios.get(`${URL}/3/movie/603692/reviews?${KEY}`);
  //   const responsive = await axios.get(`${URL}/3/movie/${movieId}/reviews${KEY}`);

  return responsive.data;
};

export default getReviewsMovie;
