import './App.css';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import { useState } from 'react';

function App() {
  // const [isAuthorized, changeIsAuthorized] = useState(true);
  const [isAuthorized, changeIsAuthorized] = useState(false);
  const [showMobailNavigation, toggleMobailNavigation] = useState(false)

  return (
    <div className="app">
      <Header 
        isAuthorized={isAuthorized}
        showMobailNavigation={showMobailNavigation}
        toggleMobailNavigation={toggleMobailNavigation}/>
      <Outlet/>
    </div>
  );
}

export default App;
