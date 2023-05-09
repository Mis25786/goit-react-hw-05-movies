import { Link, useLocation } from 'react-router-dom';
import { getImage } from './../../service/get-img';

const MovieList = ({ searchMoviesList }) => {
  const location = useLocation();

  return (
    <ul>
      {searchMoviesList &&
        searchMoviesList.map(({ id, title, poster_path }) => (
          <li key={id}>
            <div>
              <img
                src={poster_path ? getImage(poster_path) : 'Image is missing'}
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
  );
};

export default MovieList;
