const MovieDetailsCard = ({
  poster_path,
  title,
  overview,
  genres,
  vote_average,
  backdrop_path,
}) => {
  return (
    <>
      <div>
        <img src={backdrop_path ? backdrop_path : 'Image is missing'} alt="" />
        <img src={poster_path ? poster_path : 'Image is missing'} alt="" />
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
