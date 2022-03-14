import React from 'react';

function About() {
  return (
    <section>
        <h3 class="greetings">"Hello and welcome! Thank you for taking the time to stop on by and checking out my work. Enjoy!"</h3>
        <section class="hero">
            <div class="hero-content-image">
                <img src={require('../../images/Me.jpeg')} alt="Alex Betancourt enjoying his day off at Lake Eola in Orlando, Florida" />
            </div>
        </section>
        <div className='about' id='about'>
            <h2>A little bit about myself...</h2>
            <p>My name is Alex Betancourt. I am from Puerto Rico but have lived in Florida my entire life. I graduated from UCF with a psychology degree. I do enjoy psychology but after graduating, I turned my attention to trying out different interest of mine (checkout my resume) and met great people along the way. As of recent, I have become a fullstack developer and am focusing on developing my skills further with side projects.</p>
        </div>
    </section>
  );
}

export default About;