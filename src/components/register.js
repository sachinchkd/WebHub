import React from 'react'

import './register.css'

export const RegisterForm = () => {
  return (
    <div className='outerDiv'>

      <div className='register-div'>

        <div className='question1'>

        What type of website are you trying to make?

        </div>

        <div className='type-selector'>

          <div className='lableDiv'>

            <label className='webName'>
              Choose a type:
            </label>

          </div>

          <div className='selectDiv'>

            <select id='Type' className='typeSelect'>

              <option value="" >--Select One--</option>
              <option value="Mobile Phone" >Mobile Phones</option>
              <option value="Clothing" >Clothing</option>
              <option value="Makeup" >Makeup</option>

            </select>

          </div>


        </div>

        <div className='template-selector'>

          <div className='labelDiv'>

            <label className='templateName'>
              Choose an appropriate template:
            </label>

          </div>

          <div className='slectDiv'>

            <select id='Template' className='templateSelect'>

              <option value="" >--Select One--</option>
              <option value="template1" >Template1</option>
              <option value="template2" >Template2</option>

            </select>

          </div>

        
        </div>

        <div className='color-selector'>

          <div className='labelDiv'>

            <label className='colorName'>
              Choose a color palette for your website:
            </label>

          </div>

          <div className='selectDiv'>

            <select id='ColorPalette' className='colorSelect'>

              <option value="" >--Select One--</option>
              <option value="black" >Black and White</option>
              <option value="orange" >Oange and Black</option>

            </select>

          </div>


        </div>

        <div className='website-name'>

          <div className='labelDiv'>

            <label className='web-name'>
              What would you like to name your website?
            </label>

          </div>

          <div className='inputDiv'>

            <input className='website-input' type='text' 
                  inputMode='string'/>

          </div>


        </div>




      </div>
    

    
    
    </div>
  )
}
