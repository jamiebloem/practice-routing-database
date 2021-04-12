import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to ='/login'>
                    <li>Login</li>
                </Link>
                <Link to='/about'>
                    <li> About</li>
                </Link>
                <Link to ='/todo'>
                    <li> My to do list</li>
                </Link>
                <Link to ='/secret'>
                    <li> Secret page</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
