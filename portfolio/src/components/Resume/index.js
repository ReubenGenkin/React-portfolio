import React from 'react';
import './style.css'
import ResumePDF from '../../assets/Resume.pdf'

function Resume() {
    return (


        <section id="Resume" className="container-fluid resume-wrapper row">
            <a href={`${ResumePDF}`} className="resume-anchor">
            <p className="resume-link">Download Resume Here</p>
            </a> 
        </section>


    )
}

export default Resume;