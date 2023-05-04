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
        setLoading(false);
        setSearchResult(data.results);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && toast.error(`Sorry, there was an error. Please try again.`)}
      {searchResult.map(({ title, id }) => (
        <li>
          <Link to="">{title}</Link>
        </li>
      ))}
      <h1>Home</h1>
    </div>
  );
};

export default Home;
