import React from "react";
import ResumePDF from "../../images/Resume.pdf";

function Resume() {
  return (
    <section className="resume">
      <div>
        <button className="resumeBtn">
          <a href={ResumePDF} target="_blank" rel="noreferrer">
            Click Here for Resume
          </a>
        </button>
      </div>
      <br></br>
      <div className="proficiencies">
        <div className=" left">
          <div className="">
            <h2>Front-end Proficiencies</h2>
            <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="right">
            <h2>Back-end Proficiencies</h2>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL/Sequelize</li>
              <li>NoSQL:Mongo/Mongoose</li>
              <li>GraphQL</li>
            </ul>
          </div>
      </div>
    </section>
  );
}

export default Resume;
