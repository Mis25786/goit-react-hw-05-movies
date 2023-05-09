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
        {!reviews && (
          <p>Sorry, this information is not available for this movie</p>
        )}
        {reviews &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>
                {author ? `Author:${author}` : 'No information available'}
              </h2>
              <p>{content ? content : 'No information available'}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Reviews;
