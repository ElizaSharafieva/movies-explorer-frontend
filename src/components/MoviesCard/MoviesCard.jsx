import './MoviesCard.css';

function MoviesCard({ card, isSaved}) {

  const cardSaveButtonClassName = `${
    card.saved ? 'film-card__like film-card__like_active' : 'film-card__like'
  }`;

  return (
    <article className="film-card">
      <img className='film-card__image' alt='фильм' src={card.src}>
      </img>
      <div className='film-card__container'>
        <h2 className='film-card__description'>{card.name}</h2>
        {isSaved ? (
          <button className="film-card__like film-card__like_type_delete"></button>
        ) : (
          <button type="button" className={cardSaveButtonClassName}></button>
        )}
      </div>
      <span className='film-card__time'>{card.time}</span>
    </article>
  );
};

export default MoviesCard;
