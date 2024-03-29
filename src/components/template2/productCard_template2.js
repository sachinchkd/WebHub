import React from 'react'
import { NavbarTemplate2 } from './navbar_template2';
import { Footer } from '../footer';
import pic from '../../img/item3.jpg'

import './productCard_template2.css'



export const ProductCardTemplate2 = () => {

  const itemName = "Redmi Note 11 Pro Max"
  const itemPrice = "Rs.40000"

  const itemDescription = "It comes Snapdragon 695 chipset, a 5000 mAh battery with 67- watt fast charging, and a triple camera setup.";

  return (

    <div>

      <NavbarTemplate2/>


      <div className='product-card'>
        
        <div className='product-card-img'>

          <img src={pic} alt='pic'/>

        </div>

        <div className='product-card-info'>

          <h1 className='product-name'>
            {itemName}
          </h1>

          <p className='price'>
            {itemPrice}
          </p>

          {/* <h1 className='size-info'>
            Choose size
          </h1> */}

          {/* <div className='size-btn'>
            <button> S </button>
            <button> M </button>
            <button> L </button>
            <button> XL </button>
            <button> XXL </button>

          </div> */}

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
              {itemDescription}
            </p>

          </div>

        </div>

    </div>

    <Footer/>
    
  </div>

  )
}
