import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchMovie.css';

function SearchMovie(props) {

  return(
    <main className="search-page">
      <SearchForm
        value={props.value}
        isValidSubmit={props.isValidSubmit}
        isValueError={props.isValueError}
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        cards={props.cards}
        setCards={props.setCards}
        movies={true}
      />
      <FilterCheckbox
        onClickCheckbox={props.onClickCheckbox}
        isCheckbox={props.isCheckbox}
      />
      <hr className='line'></hr>
    </main>
  );
}

export default SearchMovie;
