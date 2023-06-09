import { getImage } from './../../service/get-img';
import css from './MovieDetailsCard.module.css';
import DEFAULT_FOTO from '../../img/200x300 zahlushka foto.png';

const MovieDetailsCard = ({ movieInfo }) => {
  const { poster_path, title, vote_average, overview, genres } = movieInfo;

  return (
    <>
      <div className={css['ContainerCardMovieInfo']}>
        <div className={css['CardMovieInfoImg']}>
          <img
            src={poster_path ? getImage(poster_path) : DEFAULT_FOTO}
            alt={title}
            width={200}
          />
        </div>

        <div className={css['CardMovieInfoText']}>
          <h1>{title !== '' ? title : 'No information available'} </h1>
          <h3>Overview </h3>
          <p>{overview !== '' ? overview : 'No information available'}</p>
          <h3>Genres</h3>
          <div>
            {genres?.length > 0
              ? genres.map(({ name }) => <p>{name}</p>)
              : 'No information available'}
          </div>
          <h3>Rating</h3>
          <p>
            {vote_average
              ? vote_average.toFixed(1)
              : 'No information available'}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsCard;
