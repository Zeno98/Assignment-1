import React from 'react'
import "./Header.css"
import Image from "../Header/Img.JPG"
import Logo from "../Header/logo.JPG"

const Header = () => {
  return (
    <div className='header-main-div'>


      <div className='header-div-image'>
        <img className='header-image' src={Image} alt="" />

      </div>
      <div className='header-div-white'>

      </div>
      <div className='header-div-grey'>

        <div className='header-div-logo'>
          <div><img className='header-logo' src={Logo} alt="" /></div>

          <div className='header-logo-address'>
            <li className='header-logo-li'>
              <h1>Le Cafe</h1>
              <h5>78 Sazz Street, India</h5>
              <h5 className='open-btn'><span>OPEN</span></h5>
            </li>
          </div>



        </div>

        <button className='header-div-button'>time: 12:00AM - 11:59PM</button>

      </div>

    </div>
  )
}

export default Header