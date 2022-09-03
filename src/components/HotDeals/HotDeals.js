import React from 'react'
import "./HotDeals.css"

const HotDeals = () => {
  return (
    <div>
    <div>
    {/* // this is the div for the main component */}
    <div className='main-div-of-header-section'>
      <div className="width-div-for-decor">
        {/* div for the nav bar in home decor theme */}
        <div className="main-div-of-home-decor-website"></div>
    

    
          {/* this component includes  the image and text */}
          <div className="main-div-of-the-image-of-the-office">
            <div className="second-div-of-the-image-of-the-office">
              <div>
                <img
                  className="image-of-the-office"
                  src="https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_2323,h_1548,c_limit/home-office-01.jpg"
                />
              </div>

              <div className="main-div-of-Hot-deals-for-you">
                <div>
                  <h2 className="Hot-deals-for-you">
                    Hot <br /> Deals For You
                  </h2>
                  <div className="Lorem-ipsum-dolor-sit-amet">
                    <p>
                      Lorem ipsum dolor sit amet,consectetur adipiscing elit,{" "}
                      <br />
                      sed to eiusmod tempor incididunt ut labore et dolore{" "}
                      <br /> magna aliqua Ut enim ad minim veniam.
                    </p>
                  </div>
                </div>

                <div className="From-fashion-weeks-without-shows-to-brands">
                  <p>
                    From fashion weeks without shows to brands <br /> abandoning
                    the traditional schedules. Covid-19 <br /> has thrown the
                    industry into a state of flux.
                  </p>
                  <div className="main-div-of-arrow-and-BY-SARA-MCALPINE">
                    {" "}
                    <img
                      className="arrow-icon"
                      src="https://cdn-icons.flaticon.com/png/128/664/premium/664866.png?token=exp=1659776555~hmac=52189693f7c83edc1d7fa39957d99b77"
                    />
                    <div className="BY-SARA-MCALPINE">
                      <h4>BY SARA MCALPINE 29/27/2020</h4>
                    </div>{" "}
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

export default HotDeals