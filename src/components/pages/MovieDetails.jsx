import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getDetailsMovie } from './../../service/movies-api';
// import { AiOutlineArrowLeft } from 'react-icons/ai';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  const { movieId } = useParams();

  //   const location = useLocation();
  //   const backLinkLocationRef = useRef(location.state?.from ?? '/Movies');

  useEffect(() => {
    getDetailsMovie(movieId).then(data => setMovieInfo(data));
  }, [movieId]);

  return (
    <main>
      {/* <AiOutlineArrowLeft style={{ fontSize: 15 }} /> */}
      {/* <Link to={backLinkLocationRef.current}>BACK</Link> */}

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
