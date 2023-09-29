import React from 'react';
import  './NotFoundPage.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function NotFoundPage({setHeaderHidden, setFooterHidden}) {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  React.useEffect(() => {
    setHeaderHidden(true)
    setFooterHidden(true)
  })

  return (
    <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <Link className='not-found__link' onClick={goBack}>Назад</Link>
    </section>
  )
}

export default NotFoundPage;
