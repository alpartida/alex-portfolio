import React from 'react';
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div class="container">
            <h1>Welcome to Alex's Portfolio</h1>
            <h2>
                <strong>From Apparel to <em>Tech</em></strong>
            </h2>
            <hr />
            <p>
                Hi 👋, all! Welcome to my portfolio page. I am an apparel production
                manager turned web developer. I just recently graduate a 6 month
                bootcamp and have also joined SheCodes for additional learning on web
                development. Super eager to get started in my transition into tech and
                really make an impact on my life and that of my daughters'.
        <br />
                <br />
        I am experienced in e-commerce with a demonstrated understanding of all
        things web. Skilled in WordPress, HTML, CSS, Javascript, Adobe
        Photoshop, and React. I've built a few apps, such as a weather app, dog
        api app, github-clone app, and many more. Check out my projects page for
        a full list of my applications and feel free to follow me on <a href="https://github.com/alpartida">github.</a>
                <br />
            </p>
            <img
                src="https://avatars3.githubusercontent.com/u/60553154?s=460&u=25e6ccd99bbb382d9a51f4039488a51a0e6994e7&v=4"
                alt="Alex Partida"
            />
            <Link to="/portfolio"> <button>Check out My Projects</button> </Link>
            <p class="footer">
                This page was built by <span class="myname">Alex Partida</span>
            </p>
        </div>
    )
}

export default LandingPage