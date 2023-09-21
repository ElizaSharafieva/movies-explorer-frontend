import "./Promo.css";
import promo from "../../images/promo.svg"

function Promo() {
  return (
  <section className="promo">
    <div className="promo__container">
      <img
        className="promo__image"
        src={promo}
        alt="Промо"
      />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </div>
  </section>
  )
}

export default Promo;
