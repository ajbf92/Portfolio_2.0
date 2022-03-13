import React from 'react';

function Contact() {
  return (
    <section>
         <div className='contact' id='contact'>    
            <h2>Contact Info</h2>
            <p class="contact-content">Please feel free to reach out by using the email below: </p>
            <address>
            Email: 
            <a href="mailto:placeholder@gmail.com">Placeholder@gmail.com</a>
            </address>
        </div>
    </section>
  );
}

export default Contact;