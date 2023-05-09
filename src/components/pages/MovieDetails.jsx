import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getDetailsMovie } from './../../service/movies-api';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import BackBtnLink from 'components/BackBtnLink/BackBtnLink';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getDetailsMovie(movieId).then(data => setMovieInfo(data));
  }, [movieId]);

  return (
    <main>
      <BackBtnLink />

      <MovieDetailsCard movieInfo={movieInfo} />

      <ul>
        <p>Additional information</p>
        <li>
          <Link to="Cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </main>
  );
};

export default MovieDetails;
