import React from 'react';
import './video.css'
import videoframe from '../img/vid_frame.png'

import demoVideo from '../assests/video2.mp4'


const Videocontainer = () => {
    return ( 
        <>
        <div className="Videocontainer">

            <div className="how-to-container">

                <div className="how-to-heading">
                    How to create a website
                </div>

                <div className="how-to-info-block">


                        <div className="how-to-step">

                            <ol className="how-to-step-list">

                                <li>Get Started with our Project.</li>
                                <li>Enter the requested information.</li>
                                <li>Choose a template and start a free trial.</li>
                                <li>Use our website builder to add your products and photos.</li>
                                

                            </ol>

                        </div>

                </div>

            </div>

            <div className='vidDiv'>

                <video src={demoVideo} className='vid' autoPlay loop muted />

            </div>

            
        </div>
        
        </>   
    )
}

export default Videocontainer