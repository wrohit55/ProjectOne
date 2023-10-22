import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../assest/animation_lnkitn8g.json';

const Contact = () => {
    return (<div className="contact">
        <Lottie animationData={animationData} />

        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder='ABC' />
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" required placeholder='ABC@xyz.com' />
                </div>
                <div>
                    <label >Message</label>
                    <input type="text" required placeholder='Tell us about your querry...' />
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
    )

}

export default Contact