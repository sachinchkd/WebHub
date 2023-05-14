import React from 'react'

import './footer.css'

export const Footer = () => {
  return (
    <div className='mainDiv'>

      <hr></hr>
      
      <footer className='info-footer'>

        <div className='footer-div'>

          <div className='contact'>

            <ul>

              <li>
                Contact
              </li>

              <li>
                Sitemap
              </li>

              <li>
                Teams
              </li>

            </ul>

          </div>

          <div className='faq'>
            <ul>

              <li>
                FAQs
              </li>

              <li>
                Teams
              </li>

              <li>
                Forums
              </li>

            </ul>

          </div>

          <div className='about'>

            <ul>

              <li>
                About
              </li>

              <li>
                Policies
              </li>

              <li>
                Impact
              </li>

              <li>
                Careers
              </li>

            </ul>

          </div>

          <div className='payments-info'>

            <ul>

              <li>
                Payments
              </li>

              <li>
                Help Centre
              </li>

              <li>
                Privacy Settings
              </li>


            </ul>

          </div>

        </div>

      </footer>

    </div>
  )
}
