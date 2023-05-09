import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'service/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getReviewsMovie(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author:{author}</h3>
            <h2>{author ? author : 'No information available'}</h2>
            <p>{content ? content : 'No information available'}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
