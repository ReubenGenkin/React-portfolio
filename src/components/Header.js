import React from 'react';

function Header(props){

    return(
        <div className = 'header d-flex'>
            <a href = "#Home" className="align-items-start header-link">
                
                <span className = {`header-home ${props.scrollPast ? "icon-top-bar": ""}`}></span>
                <span className = {`header-home-text top-bar--hidden icon-transition ${props.scrollPast ? "top-bar--Show": ""}`}>Reuben Genkin</span>
            </a>
        </div>
    )

}

export default Header;