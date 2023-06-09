import { Link, useLocation } from 'react-router-dom';
import { getImage } from './../../service/get-img';
import css from './MovieList.module.css';
import DEFAULT_FOTO from '../../img/200x300 zahlushka foto.png';

const MovieList = ({ searchMoviesList }) => {
  const location = useLocation();

  return (
    <>
      <h1 className={css['MoviesListTitle']}>Search result </h1>
      <ul className={css['BoxMoviesList']}>
        {searchMoviesList &&
          searchMoviesList.map(({ id, title, poster_path }) => (
            <li key={id} className={css['BoxMovies']}>
              <div>
                <img
                  src={poster_path ? getImage(poster_path) : DEFAULT_FOTO}
                  alt={title}
                  width={100}
                />
              </div>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieList;
