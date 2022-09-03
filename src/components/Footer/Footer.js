import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
    
    <div className='main-div-of-header-section'>
      <div className="width-div-for-decor">
        {/* div for the nav bar in home decor theme */}
        <div className="main-div-of-home-decor-website"></div>
    
       
       
       
       
       
       
        {/* this is the footer which includes home , company and help */}
        <div className="main-div-of-the-footer">
            <div className="Interior-co">
              <h3>INTERIOR.CO</h3>
              <p>
                Build your site for free and <br />
                take as long as you need.
              </p>
              <div className="icons-for-the-footer">
                <img
                  className="twiter-icon"
                  src="https://cdn-icons-png.flaticon.com/128/126/126720.png"
                />
                <img
                  className="twiter-icon"
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
                />
                <img
                  className="twiter-icon"
                  src="https://cdn-icons-png.flaticon.com/128/160/160154.png"
                />
                <img
                  className="twiter-icon"
                  src="https://cdn-icons-png.flaticon.com/512/104/104093.png"
                />
                <img
                  className="twiter-icon"
                  src="https://cdn-icons-png.flaticon.com/128/220/220343.png"
                />
              </div>
            </div>
            <div className="footer-content">
              <h3>Home</h3>
              <p>Appirance</p>
              <p>Content</p>
              <p>How it work?</p>
              <p>Sell</p>
              <p>Guide</p>
            </div>
            <div className="footer-content">
              <h3>Company</h3>
              <p>About Us</p>
              <p>FAQ</p>
              <p>Statstic</p>
              <p>Spoke</p>
            </div>
            <div className="footer-content">
              <h3>Help</h3>
              <p>How it work?</p>
              <p>Help Desk</p>
              <p>Program</p>
            </div>
          </div>

          </div>
      </div>
    </div>
    
  )
}

export default Footer