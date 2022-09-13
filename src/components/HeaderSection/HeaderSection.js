import React from 'react'
import "./HeaderSection.css"

const HeaderSection = () => {
  return (
    
    <div>
    {/* // this is the div for the main component */}
    <div className='main-div-of-header-section'>
      <div className="width-div-for-decor">
        {/* div for the nav bar in home decor theme */}
        <div className="main-div-of-home-decor-website"></div>
    




         {/* this component include image , text, and a input type with button */}
         <div className="We-Help-to-Make-Modern-main-div">
            <div className="We-Help-to-Make-Modern">
             <h4 className='we-help-to-make-in-header-section'>
                We Help to <br/> Make Modern<br/> Interior
              </h4> 
              <div className="We-combine-interior-and-extrior">
                <p>
                  We combine interior and Exterior design <br />
                  services and often provide them as a single <br /> solution.It
                  helps us...
                </p>
              </div>
              <div className="main-div-of-input-type-enter-your-email">
                <div className="second-div-of-input-type-enter-your-email">
                  <div className="outer-part-image-of-v-icon">
                    <img
                      className="image-of-v-icon"
                      src="https://cdn-icons-png.flaticon.com/512/3600/3600967.png"
                    />
                  </div>
                  <input
                    className="input-type-enter-your-email"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <div className="outer-border-of-start-button">
                    <button className="button-start" type="button">
                      Start
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="div-of-image-of-kitchen-living-room-study" 
           >
              <div>
                <img
                  className="image-of-interior-of-home-decor-kitchen"
                  src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/18122248/Easy-and-simple-kitchen-design-ideas-for-your-home-FB-1200x700-compressed.jpg"
                />
              </div>
              <div>
              
                <img
                  className="image-of-interior-of-home-decor-living-room"
                  src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/project%20prism%2Fcolor%20search%20archive%2Fb3b79ae12612870be67d93ca372f1081b69b2991"
                />
              </div>
              <div>
               
                <img
                  className="image-of-interior-of-home-decor-study-room"
                  src="https://static.toiimg.com/photo/84472203/84472203.jpg?imgsize=110131"
                />
              </div>
            </div> */}
          </div>



          </div>
            </div>
          </div>
  
  )
}

export default HeaderSection