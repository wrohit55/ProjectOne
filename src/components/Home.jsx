import React from 'react';
import vg from "../assest/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>

                    <h1>YouthIT</h1>
                    <p>Tech for Future</p>

                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Grapgics" />
                <div>
                    <p>
                        We have team of software engineers, designers, project managers,
                        and quality assurance professionals who collaborate to develop
                        innovative software products. They utilize various programming languages,
                        frameworks, and development tools to build software that can run on different
                        platforms such as desktop computers, mobile devices, and the web.
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>We are responsible for identifying potential clients,
                        reaching out to them, and presenting the company's software products or services.
                        We understand the clients' needs, provide information about the company's offerings,
                        and address any questions or concerns.</p>
                </div>
            </div>
            <div className="home4" id='clients'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay: "0.1s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home