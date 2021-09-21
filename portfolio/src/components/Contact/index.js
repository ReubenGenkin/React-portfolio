import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

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
            <div className="card contact-card" >
                <div className="row">
                    <h1 className="section-header contact-header card-header">Contact Me</h1>
                </div>
                    <div className="card-body">

                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group m-2">
                                <label htmlFor="name">Name: </label>
                                <input type="text" className="form-control" defaultValue={name} name="name" aria-describedby="name" placeholder="Your name" onBlur={handleChange} />
                            </div>

                            <div className="form-group m-2">
                                <label htmlFor="email">Email Address: </label>

                                <input type="email" className="form-control" defaultValue={email} name="email" aria-describedby="email" placeholder="Your email" onBlur={handleChange} />
                            </div>

                            <div className="form-group m-2">
                                <label htmlFor="message">Message: </label>
                                <textarea name="message" className="form-control" defaultValue={message} aria-describedby="message" placeholder="Your message" onBlur={handleChange} rows="5" />
                            </div>

                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary m-2 btn-lg">Submit</button>
                        </form>
                    </div>
                </div>

        </section>

    )
}

export default ContactForm;