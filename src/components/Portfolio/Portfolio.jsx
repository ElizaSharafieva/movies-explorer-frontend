import Links from '../Link/Link';
import "./Portfolio.css";

function Portfolio() {
  return(
    <section className="portfolio">
      <div className="portfolio-page">
        <h3 className="portfolio__title">Портфолио</h3>
        <Links 
          text='Статичный сайт'
          link='https://github.com/SorokinPavel/how-to-learn'
          style='portfolio__container'
        />
        <Links 
          text='Адаптивный сайт'
          link='https://sorokinpavel.github.io/russian-travel/'
          style='portfolio__container'
        />
        <Links 
          text='Одностраничное приложение'
          link='https://sorokinpavel.github.io/mesto/'
          style='portfolio__container portfolio__border'
        />
      </div>
    </section>
  );
}

export default Portfolio;
