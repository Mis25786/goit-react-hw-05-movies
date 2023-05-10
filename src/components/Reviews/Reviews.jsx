import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'service/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getReviewsMovie(movieId).then(data => {
      console.log('data :>> ', data);
      console.log('data.results :>> ', data.results);
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {!reviews && (
          <p>Sorry, this information is not available for this movie</p>
        )}
        {reviews?.length > 0
          ? reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2>
                  {author ? `Author:${author}` : 'No information available'}
                </h2>
                <p>{content ? content : 'No information available'}</p>
              </li>
            ))
          : 'No information available'}
      </ul>
    </>
  );
};

export default Reviews;
