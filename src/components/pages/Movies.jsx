// import { useState, useEffect } from 'react';
// import MovieList from './../MovieList/MovieList';
// import SearchMovie from './../SearchMovie/SearchMovie';
// import { getSearchMovie } from 'service/movies-api';

// const Movies = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [moviesList, setMoviesList] = useState([]);

//   const handleFormSubmit = value => {
//     setInputValue(value);
//   };

//   useEffect(() => {
//     getSearchMovie(inputValue).then(movi => setMoviesList(movi.results));
//   }, [inputValue]);

//   return (
//     <>
//       <main>
//         <SearchMovie handleFormSubmit={handleFormSubmit} />
//         <h1>Search result</h1>
//         <MovieList searchMoviesList={moviesList} />
//       </main>
//     </>
//   );
// };

// export default Movies;

//!========================================================

import SearchMovie from '../SearchMovie/SearchMovie';

const Movies = () => {
  return (
    <>
      <main>
        <SearchMovie />
      </main>
    </>
  );
};

export default Movies;
