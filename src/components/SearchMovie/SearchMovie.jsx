import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchMovie.css';

function SearchMovie() {
    return(
        <main className="search-page">
            <SearchForm/>
            <FilterCheckbox/>
            <hr className='line'></hr>
        </main>
    );

}

export default SearchMovie;
