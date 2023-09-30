import React from "react";
import { Link } from "react-router-dom";
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

  const location = useLocation();

  const [isSaveMovie, setIsSaveMovie] = React.useState(false);

  const cardSaveButtonClassName = `${
    isSaveMovie && props.movies ?  'film-card__like film-card__like_active' : 'film-card__like'
  }`;

  React.useEffect(() => {
    const movie = props.savedCards.find((card) => card.movieId === props.card.id);
    const saveMovie = props.savedCards.find((card) => card.movieId === props.card.movieId);
    if (movie || saveMovie) {
      setIsSaveMovie(true);
    } else {
      setIsSaveMovie(false)
    }
  }, [props.card.id, props.savedCards, props.card.movieId])

  function clickSaveButton() {
    if (isSaveMovie) {
      props.handleMovieDelete(props.card);
    } else {
      props.handleAddMovies({
        country: props.card.country,
        director: props.card.director,
        duration: props.card.duration,
        year: props.card.year,
        description: props.card.description,
        image: `https://api.nomoreparties.co/${props.card.image.url}`,
        trailerLink: props.card.trailerLink,
        nameRU: props.card.nameRU,
        nameEN: props.card.nameEN,
        thumbnail: `https://api.nomoreparties.co/${props.card.image.formats.thumbnail.url}`,
        movieId: props.card.id
      })
    }
  }


  return (
    <article className="film-card" key={props.card.id || props.card.movieId}>
      <Link to={props.card.trailerLink} className="film-card__link" target="_blank">
        <img className='film-card__image' alt='фильм' src={props.link}/>
      </Link>
      <div className='film-card__container'>
        <h2 className='film-card__description'>{props.card.nameRU}</h2>
        {isSaveMovie  &&  location.pathname === '/saved-movies'? (
          <button onClick={clickSaveButton} className="film-card__like film-card__like_type_delete"></button>
        ) : (
          <button onClick={clickSaveButton} type="button" className={cardSaveButtonClassName}></button>
        )}
      </div>
      <span className='film-card__time'>{Math.floor(props.card.duration / 60)}ч {props.card.duration % 60}м</span>
    </article>
  );
};

export default MoviesCard;
