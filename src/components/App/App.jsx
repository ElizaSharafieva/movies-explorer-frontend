import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {  useLocation } from 'react-router';
import { useState } from 'react';
import './App.css';
import {ProtectedRoute, ProtectedRouteAuth} from '../../utils/ProtectedRoute';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register'
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import movieApi from '../../utils/MoviesApi';
import api from '../../utils/MainApi';

function App() {

  const navigate = useNavigate();

  const [showMobailNavigation, toggleMobailNavigation] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [resStatus, setResStatus] = useState('');
  const [isFooterHidden, setFooterHidden] = useState(false);
  const [isHeaderHidden, setHeaderHidden] = useState(false);
  const [value, setValue] = React.useState('');
  const [cards, setCards] = React.useState(JSON.parse(localStorage.getItem('movies')));
  const [isValueError, setIsValueError] = React.useState('Фильм');
  const [isSubmitError, setIsSubmitError] = React.useState(false);
  const [valueFilter, setValueFilter] = React.useState(JSON.parse(localStorage.getItem('movie title')));
  const [isCheckedCheckbox, setIsCheckedCheckbox] = React.useState(JSON.parse(localStorage.getItem('checkbox')));
  const [isSaveCheckedCheckbox, setIsSaveCheckedCheckbox] = React.useState(JSON.parse(localStorage.getItem('save-checkbox')));
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);

  React.useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInformation()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    const token = localStorage.getItem("userId");
    if (token) {
      api
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
      }
  }, []);

  const location = useLocation();
  const isMain = location.pathname === '/';

  function handleRegister({ email, name, password }) {
    setIsLoading(true);
    api.getRegister({ email, name, password })
        .then((res) => {
          handleLogin({ email, password});
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          setResStatus(err);
        })
  };

  function handleLogin({ email, password }) {
    setIsLoading(true);
    api.getLogIn({ email, password })
      .then(() => {
        setLoggedIn(true);
        setIsLoading(false);
        navigate("/movies", { replace: true })
      })
      .catch((err) => {
        setIsLoading(false);
        setResStatus(err)
      })
  };

  function handleLogOut() {
    api
      .getlogOut(currentUser)
      .then((res) => {
        setLoggedIn(false);
        navigate('/movies', { replace: true });
        setValue('');
        setFilteredCards([]);
        setValueFilter(JSON.parse(localStorage.getItem('movie title')));
        setIsCheckedCheckbox(JSON.parse(localStorage.getItem('checkbox')));
        setIsSaveCheckedCheckbox(JSON.parse(localStorage.getItem('save-checkbox')));
        }
      )
      .catch(err => {
        console.log(`Ошибка handleLogout: ${err}`)
      });
  }

  function changeUserInformation(data) {
    api.changeUserInformation(data)
      .then((data) => {
        setResStatus(200)
        setCurrentUser(data)
      })
      .catch((err) => {
        setResStatus(err)
      })
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      api.getSavedMovies()
        .then((movies) => {
          setSavedCards(movies);
        })
        .catch(err => console.log(err));}
  }, [isLoggedIn]);

  React.useEffect(() => {
    localStorage.setItem('checkbox', JSON.stringify(isCheckedCheckbox))
    localStorage.setItem('save-checkbox', JSON.stringify(isSaveCheckedCheckbox))
  }, [isCheckedCheckbox, isSaveCheckedCheckbox])

  function handleChangeValue(evt) {
    setValue(evt.target.value);
  }

  const handleSearchSubmit = () => {
    if (value === '') {
      setIsValueError('Нужно ввести ключевое слово');
    } else {
      setIsValueError('Фильм');
      setValueFilter(value.slice());
      localStorage.setItem('movie title', JSON.stringify(value.slice()))
      setIsLoading(true);
    }
      movieApi.getInitialCards()
        .then((cards) => {
          setCards(cards);
          localStorage.setItem('movies', JSON.stringify(cards));
        })
        .catch(err => {
          console.log(err);
          setIsSubmitError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
  }

  React.useEffect(() => {
    if (cards === null) {
      setCards([]);
      setValueFilter(null)
    }
    if (cards !== null && cards.length > 0 && valueFilter !== null) {
      setValue(JSON.parse(localStorage.getItem('movie title')));
        if (isCheckedCheckbox) {
          setFilteredCards(cards.filter((card) => {
            return (card.duration <= 40) && (card.nameRU.toLowerCase().includes(valueFilter.toLowerCase())
              || card.nameEN.toLowerCase().includes(valueFilter.toLowerCase()))
          }))
        } else {
          setFilteredCards(cards.filter((card) => {
            return (card.nameRU.toLowerCase().includes(valueFilter.toLowerCase())
              || card.nameEN.toLowerCase().includes(valueFilter.toLowerCase()));
          }))
        }
    }

  }, [cards, valueFilter, isCheckedCheckbox]);

  function handleAddMovies(movie) {
    api
      .addNewCard(movie)
      .then(newMovie => {
        setSavedCards([newMovie, ...savedCards]);
      })
      .catch(err => console.log(err))
  }

  function handleMovieDelete(card) {
    const likeMovie = savedCards.find(savedCard => {
      return savedCard.owner === currentUser._id ? (savedCard.movieId === card.movieId) || (savedCard.movieId === card.id) : savedCard
    })
    api
      .deleteCard(likeMovie._id)
      .then(() => {
        setSavedCards(cards => cards.filter(movie => movie._id !== likeMovie._id))
      })
      .catch((err) => console.log(err))
  }

  function handleShortFilmMovie() {
    if (isCheckedCheckbox) {
      setIsCheckedCheckbox(false);
    } else {
      setIsCheckedCheckbox(true);
    }
  }

  function handleShortFilmSavedMovie() {
    if (isSaveCheckedCheckbox) {
      setIsSaveCheckedCheckbox(false);
    } else {
      setIsSaveCheckedCheckbox(true);
    }
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider isLoggedIn={isLoggedIn} value={currentUser}>
        {!isHeaderHidden && <Header
          isMain={isMain}
          isLoggedIn={isLoggedIn}
          toggleMobailNavigation={toggleMobailNavigation}
          showMobailNavigation={showMobailNavigation}
        />}
        <Routes>
          <Route path="/" element={<Main
            setFooterHidden={setFooterHidden}
            setHeaderHidden={setHeaderHidden}
            loggedIn={isLoggedIn}
          />} />
          <Route path="/movies" element={
            <ProtectedRoute
              setFooterHidden={setFooterHidden}
              setHeaderHidden={setHeaderHidden}
              isLoggedIn={isLoggedIn}
              element={Movies}
              value={value}
              isValueError={isValueError}
              isSubmitError={isSubmitError}
              onSubmit={handleSearchSubmit}
              isLoading={isLoading}
              onChange={handleChangeValue}
              isCheckbox={isCheckedCheckbox}
              onClickCheckbox={handleShortFilmMovie}
              filteredCards={filteredCards}
              cards={cards}
              setCards={setCards}
              handleAddMovies={handleAddMovies}
              handleMovieDelete={handleMovieDelete}
              savedCards={savedCards}
            />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute
              element={SavedMovies}
              setFooterHidden={setFooterHidden}
              setHeaderHidden={setHeaderHidden}
              savedCards={savedCards}
              cards={cards}
              setCards={setCards}
              handleMovieDelete={handleMovieDelete}
              loggedIn={isLoggedIn}
              isValueError={isValueError}
              isSubmitError={isSubmitError}
              isCheckbox={isSaveCheckedCheckbox}
              onClickCheckbox={handleShortFilmSavedMovie}
            />} />
          <Route path="/profile" element={
            <ProtectedRoute
              element={Profile}
              setFooterHidden={setFooterHidden}
              setHeaderHidden={setHeaderHidden}
              handleLogOut={handleLogOut}
              changeUserInformation={changeUserInformation}
              resStatus={resStatus}
              setResStatus={setResStatus}
              loggedIn={isLoggedIn}
          />} />
          <Route path="/signin" element={
            <ProtectedRouteAuth
              element={Login}
              onLogin={handleLogin}
              setFooterHidden={setFooterHidden}
              setHeaderHidden={setHeaderHidden}
              resStatus={resStatus}
              setResStatus={setResStatus}
              isLoading={isLoading}
            />}
          />
          <Route path="/signup" element={
            <ProtectedRouteAuth
              element={Register}
              onRegister={handleRegister}
              setFooterHidden={setFooterHidden}
              setHeaderHidden={setHeaderHidden}
              resStatus={resStatus}
              setResStatus={setResStatus}
              isLoading={isLoading}
            />}
          />
          <Route path="/*" element={<NotFoundPage
            setHeaderHidden={setHeaderHidden}
            setFooterHidden={setFooterHidden}
          />} />
        </Routes>
        {!isFooterHidden && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
