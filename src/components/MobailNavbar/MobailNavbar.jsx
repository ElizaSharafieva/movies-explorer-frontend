import { NavLink } from 'react-router-dom';
import "./MobailNavbar.css";

function MobailNavbar() {
  return (
    <div className='mobail-navbar'>
      <nav className='navigation mobail-navbar__navigation'>
        <NavLink to='/' className='mobail-navbar__item'>
          Главная
        </NavLink>
        <NavLink to='movies' className='mobail-navbar__item'>
          Фильмы
        </NavLink>
        <NavLink to='saved-movies' className='mobail-navbar__item'>
          Сохранённые фильмы
        </NavLink>
      </nav>
      <NavLink to='profile' className='profile profile-mobail'>
        <div className='profile__text'>Аккаунт</div>
        <div className="profile__icon profile__icon_default"></div>
      </NavLink>
    </div>
  )
};








export default MobailNavbar;
