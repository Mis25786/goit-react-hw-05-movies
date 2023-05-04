import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  //   HTTP zapros jaksho treba
  // }, [])

  return <div>Reviews: {movieId} </div>;
};

export default Reviews;
