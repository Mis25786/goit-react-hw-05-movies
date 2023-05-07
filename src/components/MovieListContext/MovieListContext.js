import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useCustomContext = () => useContext(Context);

const MovieListContext = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [inputValueSabmit, setInputValueSabmit] = useState([]);

  return (
    <Context.Provider
      value={{
        list: moviesList,
        setList: setMoviesList,
        inputValueSabmit,
        setInputValueSabmit,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MovieListContext;
