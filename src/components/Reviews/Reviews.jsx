import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import getReviewsMovie from 'service/reviews-api';

const Reviews = () => {
  // const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsMovie().then(data => {
      setReviews(data.results);
    });
  }, []);

  return (
    <>
      <ul>
        {reviews &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <h5>{author ? author : 'No information available'}</h5>
              <p>{content ? content : 'No information available'}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Reviews;
