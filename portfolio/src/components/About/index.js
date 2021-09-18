import React from 'react';
import profilePicture from '../../assets/profilePic.jpg'
import './style.css';


function About() {

    return (



        <section id="About" className="col-md-10 offset-md-1 mb-2 g-2">

            <div className="card content-card" >
                <div className="card-body">

                    <div className="row card-title-wrapper">
                        <h2 className="card-title ">About</h2>
                    </div>

                    <div className="card-text-wrapper">
                        <p className="card-text fs-6">Junior full stack developer proficient in core development technologies, such as JavaScript, HTML5, CSS, REACT.js and other technologies.
                            I utilize my background in sales and the food service industry to effectively communicate and adapt within the AGILE workflow.In my work I bring a focus to DRY and concise code with other developers, as
                            well as interactive, dynamic, and accessible design for users.I Earned my full stack web development certificate from Rutgers Coding Bootcamp.
                            When programming, I efficiently and effectively find solutions through collaborating with team members, as well as tools like GitHub.My goal with my work is to advance accessibility,
                            and find creative ways to enhance the user.</p>

                        <div className=" row tech-wrapper">
                            <h3>Technologies</h3>
                            <div className="col-md-4">
                                <ul className="tech-list">
                                    <li>JavaScript</li>
                                    <li>HTML5</li>
                                    <li>CSS</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="tech-list">
                                    <li>React.js</li>
                                    <li>SQL</li>
                                    <li>Mongoose/mongoDB</li>
                                    <li>GraphQL</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="tech-list">
                                    <li>Git</li>
                                    <li>Github</li>
                                    <li>Express</li>
                                    <li>Handlebars</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
}

export default About;