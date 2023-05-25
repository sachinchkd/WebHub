import React from 'react'

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";


import pic from '../../img/item3.jpg'

import './item_list_template2.css'



export const ItemListTemplate2 = () => {

  const item1Name = "Redmi Note 11 Pro Max";
  const item2Name = "Redmi Note 11 Pro Max";
  const item3Name = "Redmi Note 11 Pro Max";
  const item4Name = "Redmi Note 11 Pro Max";
  const item5Name = "Redmi Note 11 Pro Max";

  const item1Price = "Rs.40000";
  const item2Price = "Rs.40000";
  const item3Price = "Rs.40000";
  const item4Price = "Rs.40000";
  const item5Price = "Rs.40000";


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
                

                <div className='item1-info'>

                <Link to="/productCard">
                  
                  {item1Name}

                </Link>

                <p>
                  {item1Price}
                </p>

                </div>


              </div>

              <div className='item2'>

              <Link to="/productCard">

                <img src={pic} alt='pic'/>

              </Link>

              <div className='item2-info'>

              <Link to="/productCard">
                  
                  {item2Name}

              </Link>

                <p>
                  {item2Price}
                </p>

              </div>


              </div>

              <div className='item3'>

                <Link to="/productCard">

                  <img src={pic} alt='pic'/>

                </Link>

                <div className='item3-info'>

                <Link to="/productCard">
                  
                  {item3Name}

                </Link>

                <p>
                  {item3Price}
                </p>

                </div>


              </div>

              <div className='item4'>

                <Link to="/productCard">

                  <img src={pic} alt='pic'/>

                </Link>

                <div className='item4-info'>

                <Link to="/productCard">
                  
                  {item4Name}

                </Link>

                <p>
                  {item4Price}
                </p>

                </div>


              </div>

              <div className='item5'>

                <Link to="/productCard">

                  <img src={pic} alt='pic'/>

                </Link>

                <div className='item5-info'>

                <Link to="/productCard">
                  
                  {item5Name}

                </Link>

                <p>
                  {item5Price}
                </p>

                </div>


              </div>


          </div>
      
        

        </div>

      </div>


    </div>
  )
}
