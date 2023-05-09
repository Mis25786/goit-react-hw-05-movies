import { useState, useEffect } from 'react';
import MovieList from './../MovieList/MovieList';
// import { toast } from 'react-toastify';
// import Loader from './../Loader/Loader';
import SearchMovie from './../SearchMovie/SearchMovie';
import { getSearchMovie } from 'service/movies-api';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const handleFormSubmit = value => {
    setInputValue(value);
  };

  useEffect(() => {
    getSearchMovie(inputValue).then(movi => setMoviesList(movi.results));
  }, [inputValue]);

  return (
    <>
      <main>
        <SearchMovie handleFormSubmit={handleFormSubmit} />
        <h1>Search result</h1>
        <MovieList searchMoviesList={moviesList} />
      </main>
    </>
  );
};

export default Movies;

// import SearchMovie from 'components/SearchMovie/SearchMovie';
// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import getSearchMovie from 'service/search-api';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loader from 'components/Loader';
// // import MovieList from 'components/MovieList/MovieList';

// const Movies = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [inputValueSabmit, setInputValueSabmit] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();

//   const handleFormSubmit = value => {
//     setInputValue(value);
//   };

//   useEffect(() => {
//     if (!inputValue) {
//       return;
//     }

//     setLoading(true);
//     getSearchMovie(inputValue).then(data => {
//       setLoading(false);

//       if (data.results.length === 0) {
//         toast.error(`Sorry, no results were found for the query ${inputValue}`);
//         return;
//       }
//       setInputValueSabmit(data.results);
//     });
//   }, [inputValue, setInputValueSabmit]);

//   return (
//     <>
//       <SearchMovie handleFormSubmit={handleFormSubmit} />
//       <h1>Found movies</h1>
//       {loading && <Loader />}
//       {error && toast.error(`Sorry, there was an error. Please try again.`)}
//       {/* <MovieList inputValueSabmit={inputValueSabmit} location={location} /> */}
//       {inputValueSabmit &&
//         inputValueSabmit.map(movi => (
//           <li key={movi.id}>
//             <Link to={`${movi}`} state={{ from: location }}>
//               {movi.name}
//             </Link>
//             {/* <Link to={`${movi}`} state={{ from: location }}>
//               {movi.name}
//             </Link> */}
//           </li>
//         ))}
//     </>
//   );
// };

// export default Movies;
