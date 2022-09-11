import React from 'react';
import Header from '../Header/Header';
import SigninNav from '../SigninNav/SigninNav';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import './Main.css';

function Main() {
  return (
    <>
      <Header isTheme={true}>
        <SigninNav />
      </Header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
