import Techs from "../Techs/Techs";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Promo from "../Promo/Promo";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../Portfolio/Portfolio";
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Promo />
      <NavBar />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer/>
    </main>
  )
}

export default Main;
