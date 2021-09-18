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

        <section id="Contact"  className=" mb-5">
            <div className="card w-70 m-3 content-card ml-2" >
                <div className="row g-0 ml-4">
                    <h1 className="card-title">Contact Me</h1>
                </div>
                <div className="row g-0">
                <div className="w-40">
                    <div className="card-body">

                        <form id="contact-form w-60" onSubmit={handleSubmit}>
                            <div className="form-group m-2">
                                <label htmlFor="name">Name: </label>
                                <input type="text" className="form-control" defaultValue={name} name="name" aria-describedby="name" placeholder="Enter name" onBlur={handleChange} />
                            </div>

                            <div className="form-group m-2">
                                <label htmlFor="email">Email Address: </label>

                                <input type="email" className="form-control" defaultValue={email} name="email" aria-describedby="email" placeholder="Enter email" onBlur={handleChange} />
                            </div>

                            <div className="form-group m-2">
                                <label htmlFor="message">Message: </label>
                                <textarea name="message" className="form-control" defaultValue={message} aria-describedby="message" placeholder="Enter message" onBlur={handleChange} rows="5" />
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
            </div>
            </div>

        </section>

    )
}

export default ContactForm;