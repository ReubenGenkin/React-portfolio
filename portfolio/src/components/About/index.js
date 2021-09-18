import React from 'react';
import profilePicture from '../../assets/profilePic.jpg'
import './style.css';


function About() {

    return (



        <section id="About"  className="d-flex justify-content-center mb-5 mt-8">
            <div className="card w-100 m-3" >
                <div className="row g-0">
                    <h1 className="card-title d-flex justify-content-center">About Me</h1>
                </div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={profilePicture} className="img-fluid d-flex justify-content-center mb-5 profilePic" alt="selfie" />
                    </div>
                    <div className="col-md-8 p-1 align-self-center">
                        <div className="card-body">

                            <p className="card-text fs-6">Junior full stack developer proficient in core development technologies, such as JavaScript, HTML5, CSS, REACT.js and other technologies. 
                                I utilize my background in sales and the food service industry to effectively communicate and adapt within the AGILE workflow. In my work I bring a focus to DRY and concise code with other developers, as 
                                well as interactive, dynamic, and accessible design for users. I Earned my full stack web development certificate from Rutgers Coding Bootcamp. 
                                When programming, I efficiently and effectively find solutions through collaborating with team members, as well as tools like GitHub. My goal with my work is to advance accessibility,
                                and find creative ways to enhance the user.</p>
                        </div>

                        <div className="card-body">
                            <h2>Technologies</h2>

                            <ul>
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>Node</li>
                                <li>React.js</li>
                                <li>SQL</li>
                                <li>Mongoose/mongoDB</li>
                                <li>GraphQL</li>
                                <li>Git</li>
                                <li>Github</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
}

export default About;