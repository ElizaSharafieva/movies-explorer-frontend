import SearchMovie from '../SearchMovie/SearchMovie';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies() {
  return (
  <section className='movies'>
    <SearchMovie />
    <div className='saved-movies'>
      <MoviesCardList isSaved={true}/>
    </div>
    <Footer />
  </section>);
}

export default SavedMovies;
