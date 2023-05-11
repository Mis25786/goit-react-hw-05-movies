import { useEffect, useState } from 'react';
import { getMovieTrending } from '../../service/movies-api';
import TopMoviesList from '../TopMoviesList/TopMoviesList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [topMovieWeek, setTopMovieWeek] = useState([]);

  useEffect(() => {
    getMovieTrending().then(data => {
      if (data.results?.length === 0) {
        toast.info('An error occurred. Please restart the page!');
      }
      setTopMovieWeek(data.results);
    });
  }, []);

  return (
    <div>
      <TopMoviesList topMovieWeek={topMovieWeek} />
    </div>
  );
};

export default Home;
