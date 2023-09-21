import './Profile.css';

function Profile() {
  return (
    <div className='profile-page'>
      <h2 className='profile-form__title'>
          Привет, Виталий!
      </h2>
      <form className='profile-form'>
        <label className='profile-form__label'>
          Имя
          <input className='profile-form__input' 
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="30" />
        </label>
        <hr className='border'></hr>
        <label className='profile-form__label'>
          Email
          <input className='profile-form__input' 
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            minLength="2"
            maxLength="30"
            />
        </label>
        <p className='error'>Что-то пошло не так...</p>
      </form>
      <div className='profile-page__container'>
        <button className='profile-page__edit-button'>Редактировать</button>
        <button className='profile-page__exit-button'>Выйти из аккаунта</button>
      </div>
    </div>
  )
}

export default Profile;