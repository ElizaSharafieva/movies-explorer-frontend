import './NavBar.css';

function NavBar() {
  return (
    <nav className="navigate">
      <ul className="navigate__container">
        <li className="navigate__item"><a className="navigate__link" href='#about-project'>О проекте</a></li>
        <li className="navigate__item"><a className="navigate__link" href='#techs'>Технологии</a></li>
        <li className="navigate__item"><a className="navigate__link" href='#about-me'>Студент</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;
