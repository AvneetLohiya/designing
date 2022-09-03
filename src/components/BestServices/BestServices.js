import React from 'react'
import "./BestServices.css"

const BestServices = () => {
  return (
    <div>

<div>
    {/* // this is the div for the main component */}
    <div className='main-div-of-header-section'>
      <div className="width-div-for-decor">
        {/* div for the nav bar in home decor theme */}
        <div className="main-div-of-home-decor-website"></div>
    
        
          {/* this component includes image text and button */}
          <div className="main-div-of-the-image-of-the-two-person-calling">
            <div className="div-of-image-button-text">
              <div>
                <img
                  className="image-of-the-two-person-calling"
                  src="https://image.shutterstock.com/image-photo/side-view-two-fun-young-600w-2142664673.jpg"
                />
              </div>

              <div className="main-div-of-We-provide-Best-services">
                <h1 className=" We-provide-Best-services">
                  We provide Best services
                </h1>
                <div className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typese
                    <br />
                    industry. Lorem Ipsum has been the industry's standard dummy{" "}
                    <br /> text ever since the 1500s, when an unknown printer
                    took a galley
                    <br />
                    of type and scrambled it to make a type specimen book. It
                    has
                    <br />
                    survived not only five.
                  </p>
                </div>
                <div className="main-div-of-get-started-button-in-We-provide-Best-services">
                  <button
                    className="get-started-button-in-We-provide-Best-services"
                    type="button"
                  >
                    Start Now
                  </button>
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

export default BestServices