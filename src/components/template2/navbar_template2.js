import React from 'react'
import { useNavigate } from "react-router-dom";

import logo from '../../img/logo.png'
import './navbar_template2.css'


const primary_color = "#7286D3";
const secondary_color = "#D9ACF5";


export const NavbarTemplate2 = ()=>{

  const navigate = useNavigate()


  function setColor(color1,color2){

    document.documentElement.style.setProperty('--primary-color',color1);
    document.documentElement.style.setProperty('--secondary-color',color2);


  }

  setColor(primary_color,secondary_color)

  return(

    <div className='navbar'>

      <img src= {logo} classname= "logo" alt="logo"/> 

      <div className='div1'>

        <a href='/' className='home'>
          Home
        </a>

        <a onClick={() => navigate('/template2/category')} className='categories'>
          Categories
        </a>

        <a href='/' className='contact'>
          Contact
        </a>
        
      </div>     


      <div className='div2'>
{/* 
      <button className='buy' >
        BUY
      </button> */}

      <button className='cart'>
        CART
      </button>

      </div>


    </div>

  )
}