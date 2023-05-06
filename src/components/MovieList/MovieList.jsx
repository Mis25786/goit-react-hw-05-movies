import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (inputValueSabmit, location) => {
  console.log(inputValueSabmit);

  return (
    <>
      <ul>
        {inputValueSabmit &&
          inputValueSabmit.map(movi => (
            <li key={movi.id}>
              <Link to={`${movi}`} state={{ from: location }}>
                {movi.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieList;
