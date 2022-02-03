import * as React from 'react';

function Section(props) {
    
        return (

                <section id={props.sectionId} className="container-fluid grid-container">
                        <div className=" grid-item-header header-wrapper projects-header-wrapper">
                                <h2 className={` ${props.headerClassVal}-header ${props.headerClassVal}-margin `}
                                >{props.title}</h2>
                        </div>
                
                {props.children}

                </section>
        );
}


export default Section;