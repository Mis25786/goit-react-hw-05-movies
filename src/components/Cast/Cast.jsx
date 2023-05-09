// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import getCastMovie from 'service/cast-api';
// import { getImage } from './../../service/get-img';

// const DEFAULT_FOTO = '../../img/200x300 zahlushka foto.png';

// const Cast = () => {
//   const [movieCast, setMovieCast] = useState([]);
//   console.log(movieCast);

//   const { movieId } = useParams();
//   console.log(movieId);

//   useEffect(() => {
//     getCastMovie(movieId).then(data => {
//       console.log(data);
//       console.log(data.cast);
//       setMovieCast(data.cast);
//     });
//   }, [movieId]);

//   return (
//     <>
//       <ul>
//         {movieCast.map(({ id, name, profile_path }) => (
//           <li key={id}>
//             <img
//               src={profile_path ? getImage(profile_path) : DEFAULT_FOTO}
//               alt={name}
//               width={80}
//             />
//             <h3>{name}</h3>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Cast;

const Cast = () => {
  return <div>CAST</div>;
};

export default Cast;
