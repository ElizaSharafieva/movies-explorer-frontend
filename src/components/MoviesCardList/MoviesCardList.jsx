import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import './MoviesCardList.css';

function MoviesCardList(props) {

  const location = useLocation();

  const [notFound, setNotFound] = useState(true)

  React.useEffect(() => {

    if (location.pathname === '/movies') {
      const item = localStorage.getItem('movies')
      if (item) {
        setNotFound(true)
      } else {
        setNotFound(false)
      }
    }
  }, [])

  const { screen: { width } } = window;

  let step  = width >= 1280 ? 12 : width <= 1279 && width >= 768 ? 8 : width <= 768 && 5;

  const [position, setPosition] = useState(step);

  function showMore() {
    const { screen: { width } } = window;
    if (width >= 1280) {
      setPosition(position + 3);
    } else if (width <= 1279) {
      setPosition(position + 2);
    }
  }

    return(
      <section className="cards">
      {location.pathname === '/movies'
        ? <ul className="cards__list">
          {props.children.length >= 1
            ? (props.children.map((i, index) => {
              if (position > index) return i
              else <></>
              }))
            : notFound ? <p className='cards__error' >
            Ничего не найдено
          </p> : null}

        </ul>
        : <ul className="cards__list">
          {(props.children)}
        </ul>}

          {location.pathname === '/movies'
            ? (props.children.length > position
              ? (<button type="button" className="cards__button" onClick={showMore}>Ещё</button>)
                : <></>)
                  : <></>}

      </section>
    );
};

export default MoviesCardList;
