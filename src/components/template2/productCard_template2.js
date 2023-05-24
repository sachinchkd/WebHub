import React from 'react'
import { NavbarTemplate2 } from './navbar_template2';
import { Footer } from '../footer';
import pic from '../../img/item2.jpg'

import './productCard_template2.css'



export const ProductCard = () => {
  return (

    <div>

      <NavbarTemplate2/>


      <div className='product-card'>
        
        <div className='product-card-img'>

          <img src={pic} alt='pic'/>

        </div>

        <div className='product-card-info'>

          <h1 className='product-name'>
            T-shirt
          </h1>

          <p className='price'>
            Rs. 1500
          </p>

          <h1 className='size-info'>
            Choose size
          </h1>

          <div className='size-btn'>
            <button> S </button>
            <button> M </button>
            <button> L </button>
            <button> XL </button>
            <button> XXL </button>

          </div>

          <h1 className='quantity-info'>
            Quantity
          </h1>

          <div className='quantity'>

            <button className='minus-btn'>
              -
            </button>

            <input className='quantity-input' type='text'
                   readOnly max="10" min="1" step="1" inputMode='numeric'
                   aria-invalid="false" value="1"/>

                  

            <button className='plus-btn'>
              +
            </button>

          </div>

          <div className='buy-cart-btn'>
            <button className='add-to-cart-btn'> Add To Cart </button>
            <button className='buy-btn'> Buy </button>

          </div>

          <div className='separator'></div>

          <div className='info'>

            <h3>
              Description
            </h3>
            
            <p>
              This is a T-shirt.
            </p>

          </div>

        </div>

    </div>

    <Footer/>
    
  </div>

  )
}
