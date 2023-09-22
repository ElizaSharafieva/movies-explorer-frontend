import './App.css';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthorized, changeIsAuthorized] = useState(true);
  // const [isAuthorized, changeIsAuthorized] = useState(false);
  const [showMobailNavigation, toggleMobailNavigation] = useState(false);
  const location = useLocation();
  const isMain = location.pathname === '/';

  return (
    <div className="app">
      <Header
        isMain={isMain}
        isAuthorized={isAuthorized}
        showMobailNavigation={showMobailNavigation}
        toggleMobailNavigation={toggleMobailNavigation}/>
      <Outlet/>
    </div>
  );
}

export default App;
