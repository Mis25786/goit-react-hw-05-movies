import { getImage } from './../../service/get-img';

const MovieDetailsCard = ({ movieInfo }) => {
  const { poster_path, title, vote_average, overview, genres } = movieInfo;

  return (
    <>
      <div>
        <img
          src={poster_path ? getImage(poster_path) : 'Image is missing'}
          alt={title}
          width={200}
        />
        <h1>{title ? title : 'No information available'} </h1>
        <h3>Overview </h3>
        <p>{overview ? overview : 'No information available'}</p>
        <h3>Genres</h3>
        <div>
          {genres
            ? genres.map(({ name }) => <p>{name}</p>)
            : 'No information available'}
        </div>
        <h3>Rating</h3>
        <p>{vote_average ? vote_average : 'No information available'}</p>
      </div>
    </>
  );
};

export default MovieDetailsCard;
