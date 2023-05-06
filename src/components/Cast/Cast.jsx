import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCastMovie from 'service/cast-api';

const DEFAULT_FOTO = '../../img/200x300 zahlushka foto.png';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getCastMovie().then(data => {
      setMovieCast(data.cast);
    });
  }, []);

  return (
    <>
      <ul>
        {movieCast &&
          movieCast.map(({ id, name, profile_path }) => (
            <li key={id}>
              <img
                src={profile_path ? profile_path : DEFAULT_FOTO}
                alt={name}
              />
              <h3>{name}</h3>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
