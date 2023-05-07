import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import MovieListContext from 'components/MovieListContext/MovieListContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieListContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieListContext>
  </React.StrictMode>
);
// basename = '/goit-react-hw-05-movies';
