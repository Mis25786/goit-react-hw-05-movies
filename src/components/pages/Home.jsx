import { useEffect, useState } from 'react';
import getMovieTrending from 'service/trending-api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieTrending()
      .then(data => {
        console.log(data.results);

        setLoading(false);
        setSearchResult(data.results);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending movie week</h1>
      {loading && <Loader />}
      {error && toast.error(`Sorry, there was an error. Please try again.`)}
      {searchResult.map(movi => (
        <li key={movi.id}>
          <Link to={`${movi}`}>{movi.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Home;
