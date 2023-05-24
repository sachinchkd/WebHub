import React from 'react'

import { NavbarTemplate2 } from './navbar_template2'

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './category_list.css'


import pic from '../../img/item2.jpg'


export const CategoryListTemplate2 = () => {
  
  // const imagePath = '../../img/item2.jpg';

  return (
    <div>

      <NavbarTemplate2/>
    
      <div className='mainDiv'>


        <div className='categories-block'>

          <div className='heading'>

            <h1 className='cat'>
              Categories
            </h1>

          </div>

          <div className='cat-img-block'>

            <div className='cat1'>

              <Link to="/template2/category/category-card">

              <img src={pic} alt='pic'/>

              {/* <img src={require(`${imagePath}`).default} alt='pic' /> */}

              </Link>


              <a href='/template2/category/category-card'>
                Men
              </a>

            </div>

            <div className='cat2'>

              <Link to="/template2/category/category-card">

              <img src={pic} alt='pic'/>
                  
              </Link>


              <a href='/template2/category/category-card'>
                Women
              </a>

            </div>

            <div className='cat3'>

              <Link to="/template2/category/category-card">

              <img src={pic} alt='pic'/>
                  
              </Link>
              <a href='/template2/category/category-card'>

                Kids
              </a>

            </div>

          </div>

        </div>

      </div>


    </div>
  )
}
