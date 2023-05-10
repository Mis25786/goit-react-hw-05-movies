import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'service/movies-api';
import { getImage } from './../../service/get-img';
import DEFAULT_FOTO from '../../img/200x300 zahlushka foto.png';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getCastMovie(movieId).then(data => {
      setMovieCast(data.cast);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {movieCast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={profile_path ? getImage(profile_path) : DEFAULT_FOTO}
              alt={name}
              width={80}
            />
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
