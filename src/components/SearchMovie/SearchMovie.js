import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchMovie.css';

function SearchMovie() {
    return(
        <section className="search-page">
            <SearchForm/>
            <FilterCheckbox/>
            <hr className='line'></hr>
        </section>
    );

}

export default SearchMovie;