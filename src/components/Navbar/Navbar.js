import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
<div>
    {/* // this is the div for the main component */}
    <div className='main-div-of-header-section'>
      <div className="width-div-for-decor">
        {/* div for the nav bar in home decor theme */}
        <div className="main-div-of-home-decor-website"></div>
    

     <div className="main-container-in-nav-bar">
            <div className="container-in-nav-bar-items">
              <div className="Interior-co-in-the-navbar" >
                <h3 >INTERIOR.CO</h3>
              </div>

              <div className="main-div-of-nav-bar-items-content">
             
                <p className="nav-bar-items-content">Home</p>
                <p className="nav-bar-items-content">About</p>

                <p className="nav-bar-items-content">Favourltes</p>
                <p className="nav-bar-items-content">Lifestyle</p>
               

                {/* this is the button for get start */}
                <button className="get-started-button  " type="button">
                  Get Started
                </button>
              </div>
            </div>
          </div>


          </div>
            </div>
          </div>
    </div>
  )
}

export default Navbar