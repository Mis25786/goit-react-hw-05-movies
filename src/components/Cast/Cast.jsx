import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  //   HTTP zapros jaksho treba
  // }, [])

  return <div>Cast: {movieId}</div>;
};

export default Cast;
