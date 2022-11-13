import React from 'react';
import './styles/global.scss'
import AskQuestion from './views/AskOuestion'
import Awards from './views/Awards'
import Banner from "./views/Banner";
import BreakTheQuestion from "./views/BreakTheQuestion";
import Faq from './views/Faq'
import NavBar from "./views/NavBar";
import RelayAndShare from './views/RelayAndShare';
import SolutionAndEvent from './views/SolutionAndEvent'
import Sponsor from './views/Sponsor'
import noiseBg from './asset/Img/noiseBackground.png'

function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="App">
      <img id='noiseBg' src={noiseBg} alt="" />
      <NavBar />
      <Banner />
      <AskQuestion />
      <BreakTheQuestion />
      <SolutionAndEvent />
      <Awards />
      <Sponsor />
      <RelayAndShare />
      <Faq />
    </div>
  );
}

export default App;
