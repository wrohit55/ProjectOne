import React from 'react';
import Lottie from 'lottie-react';
import Rocket from '../assest/rocket.json';



const Sess = () => {
    return (<div className='sess'>

        <h1>
            Lunching soon
            <p>As soon as posoble we will be available</p>
        </h1>

        <main>
            <Lottie animationData={Rocket} />
        </main>





    </div>

    )
}

export default Sess