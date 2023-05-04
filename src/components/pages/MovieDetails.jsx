import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  //   HTTP zapros jaksho treba
  // }, [])
  return (
    <>
      <h1>Details {movieId} </h1>
      <ul>
        <li>
          <Link to="Cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
