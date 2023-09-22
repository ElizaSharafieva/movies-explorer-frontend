import './Footer.css';

function Footer() {
  return(
    <section className="footer-page">
      <div className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
          <p className="footer__year">&copy; 2020</p>
          <nav className='footer__navigation'>
            <a
              href="https://practicum.yandex.ru"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com/SorokinPavel"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </nav>
        </div>

      </div>
    </section>
  );
}

export default Footer;
