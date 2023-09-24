import './SearchForm.css';

function SearchForm() {
  return(
    <form className="search-form">
      <input
        className="search-form__input"
        id="search-input"
        name="search-input"
        type="text"
        placeholder="Фильм"
      >
      </input>
        <button type="submit" className="search-form__button"></button>
    </form>
    );
}

export default SearchForm;
