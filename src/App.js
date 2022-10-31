import React from 'react';
import './styles/global.scss'
import AskQuestion from './views/AskOuestion'
import Awards from './views/Awards'
import Banner from "./views/Banner";
import BreakTheQuestion from "./views/BreakTheQuestion";
import Faq from './views/Faq'
import Footer from './views/Footer'
import NavBar from "./views/NavBar";
import RelayAndShare from './views/RelayAndShare';
import SolutionAndEvent from './views/SolutionAndEvent'
import Sponsor from './views/Sponsor'

/* --------------範例測試 -----------*/
import ButtonTest from "./views/ButtonTest"
/* --------------範例測試 -----------*/

function App() {
  return (
    <div className="App">
      <NavBar />
      <ButtonTest />
      <Banner />
      <AskQuestion />
      <BreakTheQuestion />
      <SolutionAndEvent />
      <Awards />
      <Sponsor />
      <RelayAndShare />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
