import React from 'react';
import './style.css';

function Header(props){

    return(
        <div className = 'header d-flex'>
            <a href = "/" className="align-items-start">
                
                <span className = {`header-home ${props.scrollPast ? "icon-top-bar": ""}`}></span>
                <span className = {`header-home-text top-bar--hidden ${props.scrollPast ? "top-bar--Show": ""}`}>Reuben Genkin</span>
            </a>
        </div>
    )

}

export default Header;