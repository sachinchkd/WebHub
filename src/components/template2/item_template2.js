import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './item_template2.css'
import pic from '../../img/item3.jpg'

export const ItemTemplate2 = () => {

  const item1Name = "Redmi Note 11 Pro Max";
  const item2Name = "Redmi Note 11 Pro Max";
  const item3Name = "Redmi Note 11 Pro Max";
  const item4Name = "Redmi Note 11 Pro Max";
  const item5Name = "Redmi Note 11 Pro Max";
  const item6Name = "Redmi Note 11 Pro Max";
  const item7Name = "Redmi Note 11 Pro Max";
  const item8Name = "Redmi Note 11 Pro Max";

  const item1Price = "Rs.400000";
  const item2Price = "Rs.400000";
  const item3Price = "Rs.400000";
  const item4Price = "Rs.400000";
  const item5Price = "Rs.400000";
  const item6Price = "Rs.400000";
  const item7Price = "Rs.400000";
  const item8Price = "Rs.400000";



  return (

    <div className='mainDiv'>
      
      <div className='item-block'>

        <div className='item-block heading'>

          <h1>
            Other Products
          </h1>

        </div>

        <div className='item-img-block'>

        
          <div className='item1'>

            <Link to="/template2/productCard">

            <img src={pic} alt='pic'/>

            </Link>
            
            <a href='/template2/productCard'>
              {item1Name}
            </a>

            <p>
              {item1Price}
            </p>

          </div>

          <div className='item2'>

          <Link to="/template2/productCard">

            <img src={pic} alt='pic'/>

          </Link>

            <a href='/template2/productCard'>
            {item2Name}
            </a>

            <p>
            {item2Price}
            </p>

          </div>

          <div className='item3'>

            <Link to="/template2/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <Link to = "/template2/productCard">
            {item3Name}
            </Link>

            <p>
            {item3Price}
            </p>

          </div>

          <div className='item4'>

            <Link to="/template2/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='/template2/productCard'>
            {item4Name}
            </a>

            <p>
            {item4Price}
            </p>

          </div>

          <div className='item5'>

            <Link to="/template2/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='/template2/productCard'>
            {item5Name}
            </a>

            <p>
            {item5Price}
            </p>

          </div>

          <div className='item6'>

            <Link to="/template2/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='/template2/productCard'>
            {item6Name}
            </a>

            <p>
            {item6Price}
            </p>

          </div>

          <div className='item7'>

            <Link to="/template2/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='/template2/productCard'>
            {item7Name}
            </a>

            <p>
            {item7Price}
            </p>

          </div>

          <div className='item8'>

            <Link to="/template2/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='/template2/productCard'>
              {item8Name}
            </a>

            <p>
              {item8Price}
            </p>

          </div>

          <div className='item8'>

            <Link to="/template2/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='/template2/productCard'>
              {item8Name}
            </a>

            <p>
              {item8Price}
            </p>

          </div>

          <div className='item8'>

            <Link to="/template2/productCard">

              <img src={pic} alt='pic'/>

            </Link>

            <a href='/template2/productCard'>
              {item8Name}
            </a>

            <p>
              {item8Price}
            </p>

          </div>

      </div>
  
    

    </div>

    </div>

  )
}
