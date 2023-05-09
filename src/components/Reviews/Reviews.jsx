// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import getReviewsMovie from 'service/reviews-api';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   console.log(reviews);

//   const { movieId } = useParams();
//   console.log(movieId);

//   useEffect(() => {
//     getReviewsMovie(movieId).then(data => {
//       console.log(data);
//       console.log(data.results);
//       setReviews(data.results);
//     });
//   }, [movieId]);

//   return (
//     <>
//       <ul>
//         {reviews.map(({ id, author, content }) => (
//           <li key={id}>
//             <h3>Author:{author}</h3>
//             <h2>{author ? author : 'No information available'}</h2>
//             <p>{content ? content : 'No information available'}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Reviews;

//!=============================================

// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getReviewsMovie } from 'service/reviews-api';

const Reviews = () => {
  // const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  console.log(movieId);

  // useEffect(() => {
  //   const aaa = getReviewsMovie(movieId);

  //   console.log(aaa);
  // }, [movieId]);

  return <div>Reviews</div>;
};

export default Reviews;
