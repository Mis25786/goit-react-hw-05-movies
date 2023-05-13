import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getDetailsMovie } from './../../service/movies-api';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import BackBtnLink from 'components/BackBtnLink/BackBtnLink';
import Loader from './../Loader/Loader';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getDetailsMovie(movieId).then(data => {
      console.log('movieInfo :>> ', data);
      setMovieInfo(data);
    });
  }, [movieId]);

  return (
    <>
      <main>
        <BackBtnLink />

        <MovieDetailsCard movieInfo={movieInfo} />

        <ul>
          <h3>Additional information</h3>
          <li>
            <Link to="Cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MovieDetails;
