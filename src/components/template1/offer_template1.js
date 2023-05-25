import React from 'react'
import { useState } from 'react';
import './offer_template1.css'
// import pic from '../img/offer.png'

export const OfferTemplate1 = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const shopClick = () => {

    setScrollPosition(1300);
    
    window.scrollTo({
      top:scrollPosition,
      behaviour: 'smooth'
    });

  };

  return (

    <div>

    <div className='offer-template1'>

      <h1 className='offer-text1'>

      UP TO 40% OFF 

      </h1>

      <h1 className='offer-text2'>

      Biggest Event Of The Year

      </h1>

      <div className='offer-button'>

        <button onClick={shopClick} className='shop-now'>
          SHOP NOW
        </button>

        {/* <button className='more'>
          MORE
        </button> */}

      </div>

    </div>

    {/* <div className='offer-pic'>

        <img src={pic} alt='pic'/>

    </div> */}

    {/* <div className='sale-button'>

      <a href='/' className='new-arrival'>
        New Arrivals
      </a>

      <a href='/' className='hot-sale'>
        Hot Sales
      </a>

      <a href='/' className='discount'>
        Discount
      </a>

    </div> */}

  </div>




    

  )
}
