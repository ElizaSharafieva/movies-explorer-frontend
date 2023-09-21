import "./MobailNavbar.css";

function MobailNavbar() {
  return (
    <div className='mobailNavbar'>
      <nav className='navigation mobailNavbar__navigation'>
        <div className='mobailNavbar__item'>Главная</div>
        <div className='mobailNavbar__item mobailNavbar__item_active'>Фильмы</div>
        <div className='mobailNavbar__item'>Сохранённые фильмы</div>
      </nav>
      <div className='profile profile-mobail'>
        <div className='profile__text'>Аккаунт</div>
        <div className="profile__icon profile__icon_default"></div>
      </div>
    </div>
  )
};

export default MobailNavbar;
