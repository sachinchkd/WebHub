import React from 'react';
import './video.css'
import videoframe from '../img/vid_frame.png'

import demoVideo from '../assests/video2.mp4'


const Videocontainer = () => {
    return ( 

        <div className="Videocontainer">


            {/* <img src={videoframe} className='vid-frame' alt="vid" />  */}

            <video src={demoVideo} className='vid' autoPlay loop muted />




                
                
        </div>
           
    )
}

export default Videocontainer