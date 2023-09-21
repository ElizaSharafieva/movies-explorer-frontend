import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from './components/App/App';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Movies from './components/Movies/Movies';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import SavedMovies from './components/SavedMovies/SavedMovies';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "movies",
        element: <Movies />
      }, {
        path: "profile",
        element: <Profile />
      }, {
        path: "saved-movies",
        element: <SavedMovies />
      }
    ]
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

