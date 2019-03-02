import React from 'react';
import './style.css';

function NavBar(props) {
    return (
        <nav className="nav">
        <ul>
            <li>
                <a href="/">Clicky Game</a>
            </li>
            <li>
                {props.rightWrong}
            </li>
            <li>
               Current Score: {props.score} 
            </li>
            <li>Top Score: {props.topScore}
            </li>
        </ul>
        </nav>
    )
}

export default NavBar

