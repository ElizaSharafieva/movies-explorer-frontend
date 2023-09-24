import SearchMovie from '../SearchMovie/SearchMovie';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies() {
    return (
        <main className='movies'>
          <SearchMovie />
          <MoviesCardList isSaved={false}/>
          <Footer />
        </main>
    );
}

export default Movies;
