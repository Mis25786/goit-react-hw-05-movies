import { Link, useLocation } from 'react-router-dom';
import { getImage } from './../../service/get-img';

const TopMoviesList = ({ topMovieWeek }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {topMovieWeek.map(({ id, title, poster_path }) => (
          <ul key={id}>
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
