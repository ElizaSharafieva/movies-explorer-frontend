import React from 'react';
import SearchMovie from '../SearchMovie/SearchMovie';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './Movies.css';
import Preloader from '../Preloader/Preloader';

function Movies( props) {

  React.useEffect(() => {
    props.setHeaderHidden(false)
    props.setFooterHidden(false)
  })

  return (
    <main className='movies'>
      <SearchMovie
        value={props.value}
        isValueError={props.isValueError}
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        onClickCheckbox={props.onClickCheckbox}
        isCheckbox={props.isCheckbox}
        cards={props.cards}
        setCards={props.setCards}
        movies={true}
      />
      {props.isLoading ? (<Preloader />)
        : props.isSubmitError
          ? (<p className="cards__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>)
            :<MoviesCardList>
          {
            props.filteredCards.map((card, index) => (
              <MoviesCard
                filteredCards={props.filteredCards}
                handleAddMovies={props.handleAddMovies}
                handleMovieDelete={props.handleMovieDelete}
                key={card.id}
                card={card}
                index={index}
                link={`https://api.nomoreparties.co/${card.image.url}`}
                savedCards={props.savedCards}
                movies={true}
                />
            ))
          }
      </MoviesCardList>}

    </main>
  );
}

export default Movies;
