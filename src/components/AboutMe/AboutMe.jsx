import "./AboutMe.css";
import Subtitle from "../Subtitle/Subtitle";
import photo from '../../images/photo.png';

function AboutMe() {
  return (
  <section id="about-me" className="about-me">
    <div className="about-me__page">
      <Subtitle title='Студент'/>
      <div className="about-me__container">
        <div className="about-me__information-container">
          <h2 className="about-me__title">Виталий</h2>
          <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__text">Я родился и живу в Саратове,
            закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл
            курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.
          </p>
          <a
            href='https://github.com/SorokinPavel/new'
            target="_blank"
            rel="noreferrer"
            className="about-me__link">
               Github
          </a>
        </div>
        <img src={photo} alt='фото' className="about-me__photo"/>
      </div>
    </div>

  </section>
  )
}

export default AboutMe;
