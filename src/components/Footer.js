import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

function Footer() {
    return (

        <footer>
            <section className="footer-icon-wrapper">
                
                    <a href="www.linkedin.com/in/ReubenGenkin" className="footer-link">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/ReubenGenkin" className="footer-link">
                        <AiOutlineGithub />
                    </a>
                
            </section>
        </footer>
    )
}

export default Footer;