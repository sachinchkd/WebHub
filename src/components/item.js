import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './item.css'
import pic from '../img/item2.jpg'

export const Item = () => {
  return (

    <div className='mainDiv'>

      <div className='categories-block'>

        <div className='heading'>

          <h1 className='cat'>
            Categories
          </h1>

        </div>

        <div className='cat-img-block'>

          <div className='cat1'>

            <Link to="/category">

            <img src={pic} alt='pic'/>

            </Link>


            <a href='./category'>
              Men
            </a>

          </div>

          <div className='cat2'>

            <Link to="/category">

            <img src={pic} alt='pic'/>
                
            </Link>


            <a href='./category'>
              Women
            </a>

          </div>

          <div className='cat3'>

            <Link to="/category">

            <img src={pic} alt='pic'/>
                
            </Link>

            <a href='./category'>
              Kids
            </a>

          </div>

        </div>

      </div>

      
      <div className='item-block'>

        <div className='product-heading'>

          <h1>
            Products
          </h1>

        </div>

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
