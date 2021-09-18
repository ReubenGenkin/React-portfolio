import React from 'react';
import { BsFileText } from 'react-icons/bs'


function Resume() {
    return (

        <div>
            <div className="d-flex justify-content-center">
                <div className="card w-50">
                    <div className="card text-center">
                        <a href="https://github.com/damatgre/portfolio-damato-react/blob/develop/docs/GregDamatoResume.pdf" className="me-4 text-reset fs-1">
                            <BsFileText />
                        </a>
                        <h5 className="card-title">Click Icon For Resume</h5>

                        <div className="resume-buttons">
                            <div className="row d-flex justify-content-center">
                                <a href="https://www.linkedin.com/in/greg-damato/" className="col-3 m-1">
                                    <button type="button" className="btn btn-primary">LinkedIn</button>
                                </a>
                                <a href="https://github.com/ReubenGenkin" className="col-3 m-1">
                                    <button type="button" className="btn btn-primary" href="https://github.com/damatgre">GitHub</button>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume;