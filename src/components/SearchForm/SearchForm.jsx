import React from 'react';
import './SearchForm.css';

function SearchForm(props) {

  function handleSearchSubmit(evt) {
    console.log('zapuskayus');
    evt.preventDefault();
    if (props.cards.length > 0 && props.movies) {
      props.setCards([]);
      //props.setNext(0);
    }
    props.onSubmit();
  }

  return(
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <input
        className="search-form__input"
        id="search-input"
        name="search-input"
        type="text"
        //placeholder="Фильм"
        placeholder={props.isValueError}
        onChange={props.onChange}
        value={props.value}
      >
      </input>
        <button type="submit" className="search-form__button"></button>
    </form>
  );
}

export default SearchForm;
