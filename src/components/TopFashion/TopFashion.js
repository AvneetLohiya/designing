import React from 'react'
import "./TopFashion.css"

const TopFashion = () => {
  return (
    <div>
    <div>
    {/* // this is the div for the main component */}
    <div className='main-div-of-header-section'>
      <div className="width-div-for-decor">
        {/* div for the nav bar in home decor theme */}
        <div className="main-div-of-home-decor-website"></div>
    


    {/* this component includes text and button and image with bathrrom accesories */}
    <div className="main-div-of-top-fashion-brands-in-the-world">
            <div className="top-fashion-brands-in-the-world">
              <h4>
                Top Fashion <br /> Brands In The World
              </h4>
              <div className="We-combine-interior-and-extrior">
                <p>
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit,
                  sed to eiusmod tempor incididunt ut labore et dolore 
                  magna aliqua Ut enim ad minim veniam.{" "}
                </p>
              </div>
              <button
                className="get-started-button-in-top-fashion-brands"
                type="button"
              >
                Get Started
              </button>
            </div>

            <div>
              <img
                className="image-of-interior-of-home-with-bathroom-accesories"
                src="https://www.beautifulhomes.com/content/dam/beautifulhomes/images/202207/the-best-shower-designs-for-compact-bathrooms/Feature_corner-bathroom-shower-designs.webp"
              />
            </div>
          </div>

          </div>
            </div>
          </div>
    </div>
  )
}

export default TopFashion