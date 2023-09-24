import './AboutProject.css';
import Subtitle from "../Subtitle/Subtitle";
import Article from "../Article/Article";

function AboutProject() {
  return (
  <section id="about-project" className="about-project">
    <div className="about-project__page">
      <Subtitle title='О проекте' />
      <div className="about-project__container">
        <Article title='Дипломный проект включал 5 этапов' text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'/>
        <Article title='На выполнение диплома ушло 5 недель' text='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'/>
      </div>
      <figure className="about-project__scheme ">
        <div className="about-project__item-text about-project__item-text_theme_primary">1 неделя</div>
        <div className="about-project__item-text about-project__item-text_theme_secondary">4 недели</div>
      </figure>
      <div className="about-project__scheme about-project__scheme_type_description">
        <p className="about-project__label about-project__label_theme_primary">Back-end</p>
        <p className="about-project__label about-project__label_theme_secondary">Front-end</p>
      </div>
    </div>
  </section>
  )
}

{/* <div className="about-project__back-end">1 неделя</div>
<div className="about-project__front-end">4 недели</div> */}

export default AboutProject;
