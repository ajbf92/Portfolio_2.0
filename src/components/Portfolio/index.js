import React from 'react';

function Portfolio() {
  return (
    <section>
        <div className='portfolio' id='portfolio'></div>
        <div className="main-project">
            <a href="https://ajbf92.github.io/run-buddy/">
            <img src={require('../../images/run-buddy.png')} alt="" />
            </a>
        </div>
        {/* <a href="https://github.com/ajbf92/run-buddy">Github Repo Click Here</a> */}
        <div className="projects-h3">
            <h3 className="left">Robot Gladiator Game</h3>
            <h3 className="right">Password Generator</h3>
        </div>
        <div className="projects  row">
            <div className="col-6">
                <a href="https://ajbf92.github.io/robot-gladiators/">
                    <img src={require('../../images/robot-gladiator.png')} alt="" className="left" />
                </a>
            </div>
            <div className="col-6">
                <a href="https://ajbf92.github.io/password-generator/" >
                    <img src={require("../../images/password-generator.png")} alt="" className="right" />
                </a>
            </div>
        </div> 
        <div className="projects-h3">
            <h3 className="left">Workday Scheduler</h3>
            <h3 className="right">Weather Dashboard</h3>
        </div>
        <div className="projects  row">
            <div className="col-6 exception">
                <a href="https://ajbf92.github.io/work-day-scheduler/">
                    <img src={require(`../../images/schedule banner.jpeg`)} alt="" className="left" />
                </a>
            </div>
            <div className="col-6 exception">
                <a href="https://ajbf92.github.io/weather-dashboard/" >
                    <img src={require('../../images/weather banner.jpeg')} alt="" className="right" />
                </a>
            </div>
        </div> 
        <div className="projects-h3">
            <h3 className="left">Front-End App Project: Concierge</h3>
            <h3 className="right">Full stack Project: No Gear Fitness</h3>
        </div>
        <div className="projects row">
            <div className="col-6">
                <a href="https://ellacodes2021.github.io/Team-Indecisive-IDK/" >
                    <img src={require('../../images/concierge-banner.jpg')} alt="" className="right" />
                </a>
            </div>    
            <div className="col-6">
                <a href="https://no-gear-fitness.herokuapp.com/" >
                    <img src={require('../../images/NGF.png')} alt="" className="right" />
                </a>
            </div>  
        </div> 
    </section>
  );
}

export default Portfolio;