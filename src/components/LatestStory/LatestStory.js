import React from 'react'
import "./LatestStory.css"

const LatestStory = () => {
  return (
    <div>
    <div>
    {/* // this is the div for the main component */}
    <div className='main-div-of-header-section'>
      <div className="width-div-for-decor">
        {/* div for the nav bar in home decor theme */}
        <div className="main-div-of-home-decor-website"></div>
    
        
          {/* this component includes image text and button */}
          <div className="main-div-of-You-Might-Also-Be-Interested-In">
            <h1 className="You-Might-Also-Be-Interested-In">
              You Might Also Be Interested In..
            </h1>

            <div className="main-div-of-LATEST-STORIES">
              <div>
                <div className="main-div-of-kitchen-and-dinning-area">
                  <div>
                    
                    <img
                      className="image-of-the-kitchen"
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-decor-ideas-light-fixtures-1580421054.jpg"
                    />
                  </div>
                  <div>
                    {" "}
                    <img
                      className="image-of-the-dinning-area"
                      src="https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
                  </div>
                </div>
                <div>
                  <img
                    className="image-of-the-stair-case"
                    src="https://st.hzcdn.com/fimgs/pictures/staircases/soho-duplex-raad-studio-img~a671caea038cd1e4_2617-1-f58658b-w360-h360-b0-p0.jpg"
                  />
                  <img
                    className="image-of-the-living-room-area"
                    src="https://cdn.shopify.com/s/files/1/1306/4195/products/wmpantbwf174_1024x1024.png?v=1654863682"
                  />
                </div>
              </div>

              <div>
                <div>
                  <img
                    className="image-of-the-living-room-with-stair-case"
                    src="https://img.staticmb.com/mbcontent/images/uploads/2020/11/red.jpg"
                  />
                </div>
                <h4 className="LATEST-STORIES">LATEST STORIES</h4>
                <div className="Premmium-Quality-And-Outstanding-Services">
                  <p>
                    Premmium Quality And Outstanding <br /> Services
                  </p>
                  <button
                    className="get-started-button-in-top-fashion-brands"
                    type="button"
                  >
                    Read Now
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

export default LatestStory