import React from 'react'
import "./LastSection.css"

const LastSection = () => {
  return (
    <div>
<div>
    {/* // this is the div for the main component */}
    <div className='main-div-of-header-section'>
      <div className="width-div-for-decor">
        {/* div for the nav bar in home decor theme */}
        <div className="main-div-of-home-decor-website"></div>
    


         {/* this component includes image text and button with input type */}
         <div className="first-main-div-of-Get-notified-you-can">
            <div className="main-div-of-Get-notified-you-can">
              <div>
                <div className='div-of-notifying-you-can-and-img-of-light' >
                  {" "}
                  <h1 className="Get-notified-you-can">
                    Get notified you can <br />
                    still join the waitist
                  </h1>
                  <div className="hanging-lights-in-get-notified">
                    <img
                      className="image-of-light-lamp"
                      src="https://5.imimg.com/data5/SELLER/Default/2021/11/KN/NF/NK/19342305/bathroom-wall-shelf-250x250.png"
                    />
                  </div>{" "}
                </div>

                <div className="first-div-of-the-input-type-enter-your-email-address">
                  <div className="second-div-input-type-enter-your-email-address-Get-notified-you-can">
                    <input
                      className="input-type-enter-your-email-address"
                      type="text"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="outer-border-of-start-trial-button">
                    <button className="button-start-trial" type="button">
                      Start trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          </div>
            </div>
          </div>
    </div>
  )
}

export default LastSection