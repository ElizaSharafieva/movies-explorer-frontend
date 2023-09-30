import React from "react";

import Techs from "../Techs/Techs";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Promo from "../Promo/Promo";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../Portfolio/Portfolio";
import './Main.css';

function Main({setHeaderHidden,setFooterHidden}) {
  React.useEffect(() => {
    setHeaderHidden(false)
    setFooterHidden(false)
  })

  return (
    <main className="main">
      <Promo />
      <NavBar />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Main;
