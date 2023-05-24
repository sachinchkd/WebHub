import React from 'react'

import { NavbarTemplate1 } from "../components/template1/navbar_template1";
import { OfferTemplate1 } from '../components/template1/offer_template1';
import { ItemTemplate1 } from "../components/template1/item_template1";
import { Footer } from "../components/footer";
// import { ProductCard } from "../components/productCard";

export const Template1 = () => {
  return (
    <div>

      <NavbarTemplate1/>
      <OfferTemplate1/>
      <ItemTemplate1/>
      <Footer/>

      {/* <RegisterForm/> */}



    </div>
  )
}
