import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import './style.css'

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        //console.log('errorMessage', errorMessage);

        setFormState({ ...formState, [e.target.name]: e.target.value })

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
                <div className="row">
                    <h2 className="section-header contact-header">Contact Me</h2>
                </div>

                <form id="contact-form row email-form " onSubmit={handleSubmit}>
                    <div className="form-group m-2">
                        <label htmlFor="name" className="form-style form-label">Name: </label>
                        <input type="text" className="form-control form-style" defaultValue={name} name="name" aria-describedby="name" placeholder="Your name" onBlur={handleChange} />
                    </div>

                    <div className="form-group m-2">
                        <label htmlFor="email" className="form-style form-label">Email Address: </label>

                        <input type="email" className="form-control form-style" defaultValue={email} name="email" aria-describedby="email" placeholder="Your email" onBlur={handleChange} />
                    </div>

                    <div className="form-group m-2">
                        <label htmlFor="message" className="form-style form-label">Message: </label>
                        <textarea name="message" className="form-control form-style" defaultValue={message} aria-describedby="message" placeholder="Your message" onBlur={handleChange} rows="5" />
                    </div>

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <div className="button-wrapper">
                        <button type="submit" className="btn btn-primary m-2 btn-lg submit-btn col-md-2">Submit</button>
                    </div>
                </form>
            </div>

        </section>

    )
}

export default ContactForm;