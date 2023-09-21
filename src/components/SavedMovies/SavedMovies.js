import SearchMovie from '../SearchMovie/SearchMovie';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function SavedMovies() {
  return (
  <section className='movies'>
    <SearchMovie />
    <MoviesCardList isSaved={true}/>
    <Footer />
  </section>);
}

export default SavedMovies;