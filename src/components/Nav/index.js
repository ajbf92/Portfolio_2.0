import React from "react";

function Nav(props) {
  const {
    setContactSelected,
    setAboutSelected,
    setPortfolioSelected,
    setResumeSelected,
  } = props;
  
  return (
    <section>
      <header>
        <h1>
          Alex Betancourt's Portfolio<br></br>
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(false);
                setAboutSelected(true); 
              }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(true);
                setAboutSelected(false);
                
              }}
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(true);
                setPortfolioSelected(false);
                setAboutSelected(false);
              }} isActive
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setContactSelected(true);
                setResumeSelected(false);
                setPortfolioSelected(false);
                setAboutSelected(false);
              }} 
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
