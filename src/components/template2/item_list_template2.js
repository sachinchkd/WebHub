import React from 'react'

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import pic from '../../img/item2.jpg'

import './item_list_template2.css'



export const ItemListTemplate2 = () => {
  return (
    <div>
      

      <div className='mainDiv'>
      
        <div className='item-list'>

            <div className='item-list-heading'>
              <h1>
                Featured Products
              </h1>
            </div>

            <div className='item-img-list'>
            
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


    </div>
  )
}
