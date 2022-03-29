import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log(formState);
    }
  };

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  }

  
  // console.log(formState);

  return (
    <section className="contact">
        <h2 className="">Contact Info</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="blocked">
            <label htmlFor="name">Name:</label><br></br>
            <input
              type="text"
              name="name"
              defaultValue={name}
              // onChange - anytime there is a change
              // onChange={handleChange}
              // onBlur - when the user has changed input fields
              onBlur={handleChange}
            />
          </div>
          <div className="blocked">
            <label htmlFor="email">Email address:</label><br></br>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="blocked">
            <label htmlFor="message">Message:</label><br></br>
            <textarea
              name="message"
              rows="7"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
    </section>
  );
}

export default ContactForm;
