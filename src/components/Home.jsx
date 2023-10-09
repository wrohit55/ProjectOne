import React from 'react'
import vg from "../assest/2.webp"

const Home = () => {
    return (
        <>
            <div className='home'>
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
            <div className="home3">
                <div>
                    <h1>Who we are?</h1>
                    <p>We are responsible for identifying potential clients,
                        reaching out to them, and presenting the company's software products or services.
                        We understand the clients' needs, provide information about the company's offerings,
                        and address any questions or concerns.</p>
                </div>
            </div>
        </>
    )
}

export default Home