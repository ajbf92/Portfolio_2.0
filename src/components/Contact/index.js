import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
  }
  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
      <div className="contact" id="contact">
        <h2>Contact Info</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>
        {/* <p class="contact-content">Please feel free to reach out by using the email below: </p>
            <address>
            Email: 
            <a href="mailto:placeholder@gmail.com">Placeholder@gmail.com</a>
            </address> */}
      </div>
    </section>
  );
}

export default Contact;
