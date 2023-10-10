import React from 'react'
import { Link } from "react-router-dom";
// import Logo from "../assest/logo.png"
import { HashLink } from "react-router-hash-link";
const Head = () => {
    return (
        <nav>

            <h1> Youthit</h1>
            <main>
                <HashLink to={"/#home"}>Home</HashLink>
                <Link to={"/contact"}>Contact</Link>
                <HashLink to={"/#about"}>About</HashLink>
                <HashLink to={"/#clients"}>Clients</HashLink>
                <Link to={"/services"}>Services</Link>

            </main>
        </nav>
    )
}

export default Head