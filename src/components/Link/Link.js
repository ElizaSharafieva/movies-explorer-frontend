import { Link } from 'react-router-dom';
import "./Link.css";
import arrow from '../../images/arrow.png';

function Links(props) {
  return(
        <Link
          to={props.link}
          target="_blank"
          className='portfolio__link'
        >
          <div className= {(props.style)}>
            <h2 className='portfolio__link-text'>{props.text}</h2>
            <img className="portfolio__image" src={arrow} alt="стрелка" />
          </div>
        </Link
        >
  );
}

export default Links;
