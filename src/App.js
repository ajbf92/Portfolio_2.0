import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  // console.log(aboutSelected,contactSelected,resumeSelected,portfolioSelected);
  return (
    <>
      <div className="content-container">
        <Nav 
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}></Nav>

        {/* checking which tab is active */}
        {!aboutSelected && !resumeSelected && !portfolioSelected ? (
          <Contact></Contact>
        ) : !contactSelected && !resumeSelected && !aboutSelected ? (
          <Portfolio></Portfolio>
        ) : !contactSelected && !portfolioSelected && !aboutSelected ? (
          <Resume></Resume>
        ) : (
          <About></About>
        )}
      </div>
    <Footer className ='footer--pin'></Footer>
 </>
  );
}

export default App;
