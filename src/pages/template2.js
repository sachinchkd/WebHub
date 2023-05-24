import React from 'react'

import { NavbarTemplate2 } from '../components/template2/navbar_template2';
import { OfferTemplate2 } from '../components/template2/offer_template2';
import { ItemTemplate2 } from '../components/template2/item_template2';
import { ItemListTemplate2 } from '../components/template2/item_list_template2';
import { Footer } from "../components/footer";
import './template2.css'

export const Template2 = () => {
  return (

    <div >

      <NavbarTemplate2/>

      <div className='wrapperDiv'>

        <OfferTemplate2/>
        <ItemListTemplate2/>
        <ItemTemplate2/>
        <Footer/>

      </div>



    </div>
  )
}
