import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import MobailNavbar from '../MobailNavbar/MobailNavbar';

function Header({
  isAuthorized,
  showMobailNavigation,
  toggleMobailNavigation,
  isMain}) {
  const burgerClickHandler = () => {
    toggleMobailNavigation(!showMobailNavigation)
  }
  return (
    <>
      <section className={isMain ? 'header' : 'header header_black'}>
        <div className='header__wrapper'>
          <div className='navigation'>
            <div className='navigation__logo'>
              <NavLink to="/">
                <img src={logo} alt="logo"/>
              </NavLink>
            </div>
            {
              isAuthorized && <nav className='navigation__container'>
                <NavLink to='movies' className='navigation__item navigation__item_mobail-hidden'>
                  Фильмы
                </NavLink>
                <NavLink to='saved-movies' className='navigation__item navigation__item_mobail-hidden'>
                  Сохранённые фильмы
                </NavLink>
              </nav>
            }
          </div>
          <div className='navigation'>
            {
              isAuthorized ?
                <>
                  <NavLink to="profile" className='navigation__item navigation__item_mobail-hidden'>
                    <div className='profile'>
                      <div className='profile__text'>Аккаунт</div>
                      <div className="profile__icon profile__icon_default"></div>
                    </div>
                  </NavLink>
                  <div className={showMobailNavigation ? 'burger-menu burger-menu_open' : 'burger-menu'} onClick={burgerClickHandler}>
                    <button className={showMobailNavigation ? 'burger-menu__cross' : 'burger-menu__item'}></button>
                  </div>
                </> :
                  isMain && <>
                    <Link to="signup" className='navigation__item'>
                      Регистрация
                    </Link>
                    <Link to="signin" className='btn navigation__btn'>
                      Войти
                    </Link>
                </>
            }
          </div>
          {/* <div className={showMobailNavigation ? 'burger-menu burger-menu_open' : 'burger-menu'} onClick={burgerClickHandler}>
            <div className={showMobailNavigation ? 'burger-menu__cross' : 'burger-menu__item'}></div>
          </div> */}
        </div>
      </section>
      {
        showMobailNavigation && <MobailNavbar/>
      }
    </>
  )
}

export default Header;
