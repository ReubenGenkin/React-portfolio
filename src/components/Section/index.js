import React, { Children } from 'react';

function Section(props) {
    
        return (

                <section id={props.sectionId} className="container-fluid">
                        <div className="row header-wrapper offset-1 projects-header-wrapper">
                                <h2 className={`section-header ${props.headerClassVal}-header ${props.headerClassVal}-margin`}>{props.title}</h2>
                        </div>
                
                {props.children}

                </section>
        );
}

export default Section;