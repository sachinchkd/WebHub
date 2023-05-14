import React from 'react'

import { Navbar } from "../components/navbar";
import { Offer } from "../components/offer";
import { Item } from "../components/item";
import { Footer } from "../components/footer";
import { ProductCard } from "../components/productCard";

export const Template1 = () => {
  return (
    <div>

      <Navbar/>
      <Offer/>
      <Item/>
      <Footer/>

      {/* <RegisterForm/> */}



    </div>
  )
}
