import MoviesCard from '../MoviesCard/MoviesCard';
import cards from '../utils/cards.js'
import './MoviesCardList.css';

function MoviesCardList({isSaved}) {
  console.log({isSaved});
    return(
      <section className="cards">
         <ul className="cards__list">
            {cards.map((card) => (
              <MoviesCard key={card._id} card={card} isSaved={isSaved}/>
            ))}
          </ul>
          {isSaved ? '' :<button type="button" className="cards__button">Ещё</button>}
      </section>
    );
};

export default MoviesCardList;
