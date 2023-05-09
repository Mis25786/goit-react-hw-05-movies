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

// // import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
// import { useEffect, useRef, useState } from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import getDetailsMovie from 'service/details-api';

// const DEFAULT_FOTO = '../../img/200x300 zahlushka foto.png';

// const MovieDetails = () => {
//   //   const { movieId } = useParams('');
//   //   console.log('movieId :>> ', movieId);

//   const [movieInfo, setMovieInfo] = useState([]);
//   //   const [movieDetails, setMovieDetails] = useState('');

//   const location = useLocation();

//   const backLinkLocationRef = useRef(location.state?.from ?? '/Movies');

//   const { poster_path, title, overview, genres, vote_average } = movieInfo;

//   //   useEffect(() => {
//   //     const localSt = localStorage.getItem('todo');

//   //     console.log('localSt :>> ', localSt);
//   //     if (localSt) {
//   //       setMovieDetails(JSON.parse(localSt).find(el => el.id === movieId));
//   //     }
//   //   }, [movieId]);

//   useEffect(() => {
//     // console.log('movieDetails :>> ', movieDetails);

//     getDetailsMovie().then(data => {
//       // getDetailsMovie(movieId).then(data => {
//       setMovieInfo(data);
//     });
//   }, []);
//   //   }, [movieId]);

//   return (
//     <>
//       <button>
//         <Link to={backLinkLocationRef.current}>Back</Link>
//       </button>
//       {/* <MovieDetailsCard movieInfo={movieInfo} /> */}
//       <div>
//         <img src={poster_path ? poster_path : DEFAULT_FOTO} alt={title} />
//         <h1>{title ? title : 'No information available'} </h1>
//         <h3>Overview </h3>
//         <p>{overview ? overview : 'No information available'}</p>
//         <h3>Genres</h3>
//         <div>
//           {genres
//             ? genres.map(({ name }) => <p>{name}</p>)
//             : 'No information available'}
//         </div>
//         <h3>Rating</h3>
//         <p>{vote_average ? vote_average : 'No information available'}</p>
//       </div>
//       <ul>
//         <p>Additional information</p>
//         <li>
//           <Link to="Cast">Cast</Link>
//         </li>
//         <li>
//           <Link to="reviews">Reviews</Link>
//         </li>
//       </ul>
//       <Outlet />
//     </>
//   );
// };

// export default MovieDetails;
