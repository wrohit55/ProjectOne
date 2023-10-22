import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assest/logo1.png"
import { HashLink } from "react-router-hash-link";
const Head = () => {
    return (
        <nav>
            <div>
                <img src={Logo} />
            </div>

            <main>
                <HashLink to={"/#home"}>Home</HashLink>
                <Link to={"/contact"}>Contact</Link>
                <HashLink to={"/#about"}>About</HashLink>
                <HashLink to={"/#clients"}>Clients</HashLink>
                <Link to={"/services"}>Services</Link>
                <Link to={"/sess"}>Sess</Link>





            </main>
        </nav>
    )
}

export default Head