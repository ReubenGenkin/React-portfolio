import React, { useState } from "react";
import { validateEmail } from "../utils/helper";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  let arr = ["Name", "Email", "Message"];
  function contactFormGen() {
    return arr.map((el) => (
      <div className="form-group">
        <label htmlFor={el} className="form-style form-label">
          {el}{" "}
        </label>
        <input
          type="text"
          className="form-control form-style"
          defaultValue={el}
          name={el}
          aria-describedby={el}
          placeholder={`Your ${el}`}
          onBlur={handleChange}
        />
      </div>
    ));
  }

  function handleChange(e) {
    if (e.target.name === "Email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      //isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid");
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

    //console.log('errorMessage', errorMessage);

    setFormState({ ...formState, [e.target.name]: e.target.value });

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  //console.log(formState);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section id="Contact" className="container-fluid">
      <div class="contact-wrapper">
        <div className="">
          <h2 className="section-header contact-header">Contact Me</h2>
        </div>

        <form id="contact-form  email-form " onSubmit={handleSubmit}>
          {contactFormGen()}

          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}

          <div className="button-wrapper">
            <button
              type="submit"
              className=" submit-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
