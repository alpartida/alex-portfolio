import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="nav-bar">
            <Link to="/blog"> <h2>Blog</h2> </Link>
            <Link to="/resume"> <h2>Resume</h2> </Link>
            <Link to="/portfolio"> <h2>Portfolio</h2> </Link>
        </div>
    )
}

export default Navbar