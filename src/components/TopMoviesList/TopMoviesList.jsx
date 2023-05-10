import { Link, useLocation } from 'react-router-dom';
import { getImage } from './../../service/get-img';
import css from './TopMoviesList.module.css';

const TopMoviesList = ({ topMovieWeek }) => {
  const location = useLocation();

  return (
    <>
      <h1 className={css['TopMoviesTitle']}>Trending movie week</h1>
      <ul className={css['BoxTopMovies']}>
        {topMovieWeek.map(({ id, title, poster_path }) => (
          <ul key={id} className={css['BoxMovies']}>
            <li>
              <img
                src={poster_path ? getImage(poster_path) : 'Image is missing'}
                alt={title}
                width={100}
              />
            </li>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </ul>
        ))}
      </ul>
    </>
  );
};

export default TopMoviesList;
