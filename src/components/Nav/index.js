import React from "react";

function Nav() {
  return (
    <section>
      <header> 
      <h1>
        <a href="./index.html">Alex Betancourt's Portfolio</a><br></br>
      </h1>
      </header> 
      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">My Work</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      
    </section>
  );
}

export default Nav;
