class MainApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getRegister(user) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({name:user.name, email: user.email, password: user.password})
    })
        .then(res => { return this._getResponse(res); })
  }

  getLogIn(user) {
    return fetch(`${this._baseUrl}/signin`, {
      credentials:"include",
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({email: user.email, password: user.password})
    })
        .then(res => { return this._getResponse(res)  })
        .then((data) => {
          localStorage.setItem('userId', data._id);
        })
  }

  getlogOut(user) {
    return fetch(`${this._baseUrl}/signout`, {
      credentials: "include",
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({email: user.email})
    })
    .then(res => { return this._getResponse(res) })
    .then((data) => {
      localStorage.removeItem('userId', data._id);
      localStorage.removeItem('movies');
      localStorage.removeItem('movie title');
      localStorage.removeItem('checkbox');
      localStorage.removeItem('save-checkbox');
    })
  };

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials:"include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        //"Authorization" : `Bearer ${token}`,
      },
    })
        .then(res => { return this._getResponse(res); })
  };

  getUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: this._headers
    })
      .then(res => { return this._getResponse(res); })
  }

  changeUserInformation(user) {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({name: user.name, email: user.email})
    })
        .then(res => {return this._getResponse(res);})
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this.headers
    })
      .then(res => {return this._getResponse(res);})
  }

  addNewCard({ country, director, duration, year, description,
    image, trailerLink, nameRU, nameEN, thumbnail, movieId }) {
      return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      })
    }).then(res => {return this._getResponse(res);})
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/movies/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    }).then(res => {return this._getResponse(res);})
  }

}

const authConfig = {
    baseUrl: //"http://localhost:3000",
    "https://api.films.nomoredomainsicu.ru",
    headers: {
      "Content-Type": "application/json",
    }
}

const api = new MainApi(authConfig);

export default api;
