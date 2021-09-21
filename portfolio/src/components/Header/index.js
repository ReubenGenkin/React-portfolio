import React from 'react';
import './style.css';

function Header(props){

    return(
        <div className = 'header offset-md-1'>
            <a href = "/">
                
                <span className = {`header-home ${props.scrollPast ? "header-icon": ""}`}></span>
                
            </a>
        </div>
    )

}

export default Header;