import SearchMovie from '../SearchMovie/SearchMovie';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies() {
    return (
        <section className='movies'>
          <SearchMovie />
          <MoviesCardList isSaved={false}/>
          <Footer />
        </section>
    );
}

export default Movies;