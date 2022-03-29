import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  // console.log(aboutSelected,contactSelected,resumeSelected,portfolioSelected);
  return (
    <Router>
      <div className="content-container">
        <Nav 
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}></Nav>

        {/* checking which tab is active */}
        {!aboutSelected && !resumeSelected && !portfolioSelected ? (
          <ContactForm></ContactForm>
        ) : !contactSelected && !resumeSelected && !aboutSelected ? (
          <Portfolio></Portfolio>
        ) : !contactSelected && !portfolioSelected && !aboutSelected ? (
          <Resume></Resume>
        ) : (
          <About></About>
        )}
      </div>
    <Footer className ='footer--pin'></Footer>
 </Router>
  );
}

export default App;
