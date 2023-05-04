import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = searchResult => {
  console.log(searchResult);

  return (
    <>
      {searchResult.map(({ title, id }) => (
        <li key={id}>
          <Link to="">{title}</Link>
        </li>
      ))}
    </>
  );
};

export default MovieList;
