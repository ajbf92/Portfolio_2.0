import React from "react";

function Footer() {
  return (
    <section className="footer footer--pin">
        <h2 className="footer-h2" style={{ backgroundColor: "gray" }}>
          {" "}
          🐵 mojojojom{" "}
        </h2>
      <div className="footer-div">
        <a className="footer-a"
          href="https://www.linkedin.com/in/alex-betancourt-267187236/"
          style={{ color: "white"}}
        >
          LinkedIn
        </a>
        <a className="footer-a"
          href="https://github.com/ajbf92"
          style={{ color: "white"}}
        >
          Github
        </a>
      </div>
    </section>
  );
}

export default Footer;
