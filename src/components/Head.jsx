import React from 'react'
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
const Head = () => {
    return (
        <nav>
            <h1>YouthIT</h1>
            <main>
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/#about"}>About</Link>
                <Link to={"/#Clients"}>Clients</Link>
                <Link to={"/services"}>Services</Link>







            </main>
        </nav>
    )
}

export default Head