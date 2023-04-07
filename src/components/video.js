import React from 'react';
import './video.css'
import videoframe from '../img/vid_frame.png'

const Videocontainer = () => {
    return ( 
            <div className="Videocontainer">
                <img src={videoframe} className='vid' alt="vid" /> 
                
            </div>
           
    )
}

export default Videocontainer