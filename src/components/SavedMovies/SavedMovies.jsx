import React from "react";
import SearchMovie from '../SearchMovie/SearchMovie';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import MoviesCard from "../MoviesCard/MoviesCard";

  function SavedMovies(props) {

    const [filteredCards, setFilteredCards] = React.useState(props.savedCards);
    const [value, setValue] = React.useState('')
    const [isValidSubmit, setIsValidSubmit] = React.useState(false);
    const [isValueError, setIsValueError] = React.useState('Фильм');
    const [valueFilter, setValueFilter] = React.useState('');
    const [isNotFound, setIsNotFound] = React.useState(false);

    function handleChangeValue(evt) {
      setValue(evt.target.value);
    }

    const handleSearchSubmit = () => {
      if (value === '') {
        setIsValidSubmit(true);
        setIsValueError('Нужно ввести ключевое слово');
      } else {
        setIsValidSubmit(false);
        setIsValueError('Фильм');
        setValueFilter(value.slice());
      }
    };

    React.useEffect(() => {
      if (props.isCheckbox) {
        setFilteredCards(props.savedCards.filter((card) => {
          return (card.duration <= 40) && (card.nameRU.toLowerCase().includes(valueFilter.toLowerCase())
            || card.nameEN.toLowerCase().includes(valueFilter.toLowerCase()))
        }))
      } else {
        setFilteredCards(props.savedCards.filter(card => {
          return (card.nameRU.toLowerCase().includes(valueFilter.toLowerCase())
          || card.nameEN.toLowerCase().includes(valueFilter.toLowerCase())
          )
        }))
     }
    }, [valueFilter, props.savedCards, props.isCheckbox])

    React.useEffect(() => {
      if (filteredCards.length === 0 && props.savedCards.length !== 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }, [filteredCards.length, props.savedCards.length]);

    return (
      <section className='movies'>
        <SearchMovie
          setCards={props.setCards}
          onClickCheckbox={props.onClickCheckbox}
          isCheckbox={props.isCheckbox}
          cards={filteredCards}
          value={value}
          filteredCards={filteredCards}
          isValidSubmit={isValidSubmit}
          isValueError={isValueError}
          onSubmit={handleSearchSubmit}
          onChange={handleChangeValue}
        />
        <div className='saved-movies'>
        <MoviesCardList>
          {isNotFound
            ? (<p className='cards__error'>Ничего не найдено</p>)
              : filteredCards.map((card) => (
                <MoviesCard
                  handleMovieDelete={props.handleMovieDelete}
                  key={card.movieId}
                  card={card}
                  link={card.image}
                  savedCards={props.savedCards}
                  handleAddMovies={props.handleAddMovies}
                  isSave={true}
                />
              ))
          }
        </MoviesCardList>
      </div>
    </section>);
}

export default SavedMovies;
