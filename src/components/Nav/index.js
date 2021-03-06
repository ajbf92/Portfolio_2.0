import React from "react";
import {NavLink} from 'react-router-dom'


function Nav(props) {
  const {
    setContactSelected,
    setAboutSelected,
    setPortfolioSelected,
    setResumeSelected,
  } = props;

  // console.log(props);
  
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
            <NavLink default
              to="/portfolio_2.0/about"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(false);
                setAboutSelected(true); 
              }}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="portfolio_2.0/portfolio"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(true);
                setAboutSelected(false);
              }}
            >
              My Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="portfolio_2.0/resume"
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(true);
                setPortfolioSelected(false);
                setAboutSelected(false);
              }}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="portfolio_2.0/contact"
              onClick={() => {
                setContactSelected(true);
                setResumeSelected(false);
                setPortfolioSelected(false);
                setAboutSelected(false);
              }} 
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
