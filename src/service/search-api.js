import axios from 'axios';

const URL = 'https://api.themoviedb.org';
const KEY = 'api_key=345007f9ab440e5b86cef51be6397df1';

const getSearchMovie = async search => {
  const responsive = await axios.get(
    `${URL}/3/search/company?${KEY}&query=${search}`
  );

  return responsive.data;
};

export default getSearchMovie;
