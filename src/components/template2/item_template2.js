import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './item_template2.css'
import pic from '../../img/item2.jpg'

export const ItemTemplate2 = () => {
  return (

    <div className='mainDiv'>
      
      <div className='item-block'>

        <div className='item-img-block'>
        
          <div className='item1'>

            <Link to="/productCard">

            <img src={pic} alt='pic'/>

            </Link>
            
            <a href='./productCard'>
              T-Shirt
            </a>

            <p>
              Rs.1500
            </p>

          </div>

          <div className='item2'>

          <Link to="/productCard">

            <img src={pic} alt='pic'/>

          </Link>

            <a href='./productCard'>
              T-Shirt
            </a>

            <p>
              Rs.1500
            </p>

          </div>

          <div className='item3'>

            <Link to="/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <Link to = "/productCard">
              T-Shirt
            </Link>

            <p>
              Rs.1500
            </p>

          </div>

          <div className='item4'>

            <Link to="/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='./productCard'>
              T-Shirt
            </a>

            <p>
              Rs.1500
            </p>

          </div>

          <div className='item5'>

            <Link to="/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='./productCard'>
              T-Shirt
            </a>

            <p>
              Rs.1500
            </p>

          </div>

          <div className='item6'>

            <Link to="/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='./productCard'>
              T-Shirt
            </a>

            <p>
              Rs.1500
            </p>

          </div>

          <div className='item7'>

            <Link to="/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='./productCard'>
              T-Shirt
            </a>

            <p>
              Rs.1500
            </p>

          </div>

          <div className='item8'>

            <Link to="/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='./productCard'>
              T-Shirt
            </a>

            <p>
              Rs.1500
            </p>

          </div>

      </div>
  
    

    </div>

    </div>

  )
}
