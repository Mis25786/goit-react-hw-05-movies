import { useEffect, useState } from 'react';
import { getMovieTrending } from './../../service/movies-api';
import TopMoviesList from './../TopMoviesList/TopMoviesList';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [topMovieWeek, setTopMovieWeek] = useState([]);

  useEffect(() => {
    getMovieTrending().then(data => setTopMovieWeek(data.results));
  }, []);

  return (
    <div>
      <h1>Trending movie week</h1>
      <TopMoviesList topMovieWeek={topMovieWeek} />
    </div>
  );
};

export default Home;
