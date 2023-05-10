// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { toast } from 'react-toastify';

// import { ImSearch } from 'react-icons/im';

// import css from './SearchMovie.module.css';

// const SearchMovie = ({ handleFormSubmit }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = e => {
//     setInputValue(e.currentTarget.value.toLowerCase());
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (inputValue.trim() === '') {
//       toast('Enter your request');
//       return;
//     }

//     handleFormSubmit(inputValue);
//     setInputValue('');
//   };

//   return (
//     <header className={css['Searchbar']}>
//       <form className={css['SearchForm']} onSubmit={handleSubmit}>
//         <button type="submit" className={css['SearchForm-button']}>
//           <ImSearch style={{ fontSize: 30 }}>Search</ImSearch>
//         </button>

//         <input
//           name="query"
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Find your favorite movie"
//           className={css['SearchForm-input']}
//           autoComplete="off"
//           autoFocus
//         />
//       </form>
//     </header>
//   );
// };

// SearchMovie.propTypes = {
//   handleFormSubmit: PropTypes.func.isRequired,
// };

// export default SearchMovie;

//!===============================================================

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ImSearch } from 'react-icons/im';

import css from './SearchMovie.module.css';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'service/movies-api';
import MovieList from './../MovieList/MovieList';

const SearchMovie = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams === '') return;

    setInputValue(searchParams.get('query') ?? '');

    async function fetchMovieList() {
      const movieList = await getSearchMovie(searchParams.get('query'));
      const movieListArray = await movieList.results;

      setMoviesList(movieListArray);
    }

    fetchMovieList();
    setInputValue('');
  }, [searchParams]);

  const handleInputChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      toast('Enter your request');
      return;
    }

    const query = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(query);

    getSearchMovie(inputValue).then(movi => setMoviesList(movi.results));
    setInputValue('');
  };

  return (
    <>
      <header className={css['Searchbar']}>
        <form className={css['SearchForm']} onSubmit={handleSubmit}>
          <button type="submit" className={css['SearchForm-button']}>
            <ImSearch style={{ fontSize: 30 }}>Search</ImSearch>
          </button>

          <input
            name="query"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Find your favorite movie"
            className={css['SearchForm-input']}
            autoComplete="off"
            autoFocus
          />
        </form>
      </header>
      <main>{moviesList && <MovieList searchMoviesList={moviesList} />}</main>
    </>
  );
};

export default SearchMovie;
