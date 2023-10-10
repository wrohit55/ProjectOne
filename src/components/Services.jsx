import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assest/5.jpg";
import img2 from "../assest/6.jpg";
import img3 from "../assest/7.jpg";





const Services = () => {
    return (
        <div className="back">
            <div className='services'>
                <Carousel
                    infiniteLoop
                    autoPlay
                    showStatus={false}

                    interval={2000}
                    showThumbs={false}
                >
                    <div>
                        <img src={img1} alt="Item1" />
                        <p className="legend">Fullstack</p>

                    </div>
                    <div>
                        <img src={img2} alt="Item2" />
                        <p className='legend'>Peer-Peer</p>
                    </div>
                    <div>
                        <img src={img3} alt="Item3" />
                        <p className='legend'>Peer-Peer</p>
                    </div>
                </Carousel>
            </div>
        </div>

    )
}

export default Services