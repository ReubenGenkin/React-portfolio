import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

function Footer() {
    return (

        <footer className="text-center bg-light mt-4">
            <section className="d-flex justify-content-center border-bottom icon-wrapper">
                <div>
                    <a href="www.linkedin.com/in/ReubenGenkin" className="me-4 text-black fs-1">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/ReubenGenkin" className="me-4 text-black fs-1">
                        <AiOutlineGithub />
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;