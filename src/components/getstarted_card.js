import React from "react";

import './getstarted_card.css'

export const GetStartedCard = ()=>{
    return(
        <div className="card-bg">
            <div className="outer-card">

            
                <div className="card">
                    <div className="logo">

                    </div>
                    <div className="card-content">
                        <h2>Is this the first time you’re running?</h2>
                        <h5>It’ll be easer to setup.</h5>
                        <p>I’m just starting</p>
                        <p>Already have</p>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}