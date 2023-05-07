import SearchMovie from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import getSearchMovie from 'service/search-api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useCustomContext } from 'components/MovieListContext/MovieListContext';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const { inputValueSabmit, setInputValueSabmit } = useCustomContext();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleFormSubmit = value => {
    setInputValue(value);
  };

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setLoading(true);
    getSearchMovie(inputValue).then(data => {
      setLoading(false);

      if (data.results.length === 0) {
        toast.error(`Sorry, no results were found for the query ${inputValue}`);
        return;
      }
      setInputValueSabmit(data.results);
    });
  }, [inputValue, setInputValueSabmit]);

  return (
    <>
      <SearchMovie handleFormSubmit={handleFormSubmit} />
      <h1>Found movies</h1>
      {loading && <Loader />}
      {error && toast.error(`Sorry, there was an error. Please try again.`)}
      {/* <MovieList inputValueSabmit={inputValueSabmit} location={location} /> */}
      {inputValueSabmit &&
        inputValueSabmit.map(movi => (
          <li key={movi.id}>
            <Link to={`${movi}`} state={{ from: location }}>
              {movi.name}
            </Link>
            {/* <Link to={`${movi}`} state={{ from: location }}>
              {movi.name}
            </Link> */}
          </li>
        ))}
    </>
  );
};

export default Movies;
