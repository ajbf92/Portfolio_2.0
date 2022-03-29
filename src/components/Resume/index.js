import React from "react";
import ResumePDF from "../../images/Resume.pdf";

function Resume() {
  return (
    <section>
      <button className="resumeBtn">
        <a href={ResumePDF} target="_blank" rel="noreferrer">
          Click Here for Resume
        </a>
      </button>
    </section>
  );
}

export default Resume;
