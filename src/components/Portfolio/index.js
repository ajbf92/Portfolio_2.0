import React from 'react';

function Portfolio() {
  return (
    <section>
        <div className='portfolio' id='portfolio'>
            <h2>Projects</h2>
        </div>
        <div class="main-project">
            <a href="https://ajbf92.github.io/run-buddy/">
            <img src={require('../../images/run-buddy.png')} alt="" />
            </a>
        </div>
        <div class="projects-h3">
            <h3 class="left">Robot Gladiator Game</h3>
            <h3 class="right">Password Generator</h3>
        </div>
        <div class="projects  row">
            <div class="col-6">
                <a href="https://ajbf92.github.io/robot-gladiators/">
                    <img src={require('../../images/robot-gladiator.png')} alt="" class="left" />
                </a>
            </div>
            <div class="col-6">
                <a href="https://ajbf92.github.io/password-generator/" >
                    <img src={require("../../images/password-generator.png")} alt="" class ="right" />
                </a>
            </div>
        </div> 
        <div class="projects-h3">
            <h3 class="left">Workday Scheduler</h3>
            <h3 class="right">Weather Dashboard</h3>
        </div>
        <div class="projects  row">
            <div class="col-6 exception">
                <a href="https://ajbf92.github.io/work-day-scheduler/">
                    <img src={require(`../../images/schedule banner.jpeg`)} alt="" class="left" />
                </a>
            </div>
            <div class="col-6 exception">
                <a href="https://ajbf92.github.io/weather-dashboard/" >
                    <img src={require('../../images/weather banner.jpeg')} alt="" class ="right" />
                </a>
            </div>
        </div> 
        <div class="projects-h3">
            <h3 class="left">Front-End App Project: Concierge</h3>
            <h3 class="right">Full stack Project: No Gear Fitness</h3>
        </div>
        <div class="projects row">
            <div class="col-6">
                <a href="https://ellacodes2021.github.io/Team-Indecisive-IDK/" >
                    <img src={require('../../images/concierge-banner.jpg')} alt="" class ="right" />
                </a>
            </div>    
            <div class="col-6">
                <a href="https://no-gear-fitness.herokuapp.com/" >
                    <img src={require('../../images/NGF.png')} alt="" class ="right" />
                </a>
            </div>  
        </div> 
    </section>
  );
}

export default Portfolio;