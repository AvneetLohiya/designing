import React from "react";
import "./home.css";

function Home() {
  return (
    // this is the div for the main component 
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="width-div-for-decor">
      {/* div for the nav bar */}
        <div className="main-div-of-home-decor-website">
          <div className="main-container-in-nav-bar">
            <div className="container-in-nav-bar-items">
              <div>
              <h3>INTERIOR.CO</h3>
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
            {/* this component include image , text, and a input type with button */}
          <div className="We-Help-to-Make-Modern-main-div" >
            <div className="We-Help-to-Make-Modern">
              <h4>
                We Help to Make Modern Interior
              </h4>
              <div className="We-combine-interior-and-extrior">
                <p>
                  We combine interior and Exterior design <br/>
                  services and often provide them as a single <br/> solution.It
                  helps us...
                </p>
              </div>
            </div>
            <div>
              <img
                className="image-of-interior-of-home"
                src="https://img.freepik.com/premium-photo/tropical-interior-design-living-room_269031-60.jpg?w=2000"
              />
            </div>
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

         
         {/* this component includes the five borders which have icons in it */}
         <div className="main-div-of-connect-with-us">
          <div className="Connect-with-us">
            <h2>Connect with us</h2>
          </div>
         

          <div className="icons-for-contact-us">
            <img
              className="pay-icon"
              src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
            />
            <div className="pay-icon-BuzzFeed">
             
              <h3>BuzzFeed</h3>
            </div>
            <div className="pay-icon-Booking-com">
             
              <h3>Booking.com</h3>
            </div>
            <img
              className="pay-icon"
              src="https://cdn-icons-png.flaticon.com/128/179/179457.png"
            />
            <img
              className="pay-icon"
              src="https://cdn-icons-png.flaticon.com/128/196/196565.png"
            />
          </div>
          </div>


          {/* this component includes text and button and image with bathrrom accesories */}
          <div className="main-div-of-top-fashion-brands-in-the-world"
          >
            <div className="top-fashion-brands-in-the-world">
              <h4>
                Top Fashion <br /> Brands In The World
              </h4>
              <div className="We-combine-interior-and-extrior">
                <p>
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, <br />
                  sed to eiusmod tempor incididunt ut labore et dolore <br />{" "}
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
                src="http://cdn.home-designing.com/wp-content/uploads/2019/01/Modern-bathroom-shelving.jpg"
              />
            </div>
          </div>

         {/* this component includes  the image and text */}
          <div className="main-div-of-the-image-of-the-office">
        <div className="second-div-of-the-image-of-the-office"
        >
            <div>
              <img
                className="image-of-the-office"
                src="https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_2323,h_1548,c_limit/home-office-01.jpg"
              />
            </div>

            <div className="main-div-of-Hot-deals-for-you"
             >
            <div>
              <h2 className="Hot-deals-for-you">
                Hot <br /> Deals For You
              </h2>
              <div className="Lorem-ipsum-dolor-sit-amet">
                <p>
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, <br />
                  sed to eiusmod tempor incididunt ut labore et dolore <br />{" "}
                  magna aliqua Ut enim ad minim veniam.
                </p>
              </div>
              </div>
              
              <div className="From-fashion-weeks-without-shows-to-brands">
                <p>
                  From fashion weeks without shows to brands <br /> abandoning
                  the traditional schedules. Covid-19 <br /> has thrown the
                  industry into a state of flux
                </p>
              </div>
              </div>
           
          </div>
          </div>
         
          {/* this component includes image text and button */}
          <div className="main-div-of-You-Might-Also-Be-Interested-In">
            <h1 className="You-Might-Also-Be-Interested-In"
            >
              You Might Also Be Interested In..
            </h1>

            <div className="main-div-of-LATEST-STORIES">
             
             <div>
              <div className="main-div-of-kitchen-and-dinning-area">
              <div>  <img
                  className="image-of-the-kitchen"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-decor-ideas-light-fixtures-1580421054.jpg"
                /></div>
              <div>  <img
                  className="image-of-the-dinning-area"
                  src="https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGluaW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80"
                /></div>
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
              
              
              
              
              
          
               <div > 
               <div><img
                className="image-of-the-living-room-with-stair-case"
                src="https://img.staticmb.com/mbcontent/images/uploads/2020/11/red.jpg"
              /></div>
                <h4 className="LATEST-STORIES">LATEST STORIES</h4>
                <div className="Premmium-Quality-And-Outstanding-Services">
                  <p>
                    Premmium Quality And Outstanding <br/> Services
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
                  Lorem Ipsum is simply dummy text of the printing and typese<br/>
                  industry. Lorem Ipsum has been the industry's standard
                  dummy <br/> text ever since the 1500s, when an unknown
                  printer took a galley<br/>of type and  scrambled it
                  to make a type specimen book. It has<br/>survived not only
                  five.
                </p></div>
                <div className="main-div-of-get-started-button-in-We-provide-Best-services"
                 >
                <button
                  className="get-started-button-in-We-provide-Best-services"
                  type="button"
                >
                  Start Now
                </button></div></div>
              </div>
             </div>




            {/* this component includes image text and button with input type */}
          <div className="first-main-div-of-Get-notified-you-can" >
           <div className="main-div-of-Get-notified-you-can">
            <div>
          
           <h1
             className="Get-notified-you-can"
            >
              Get notified you can <br />
              still join the waitist
            </h1>
             {/* <div className="hanging-lights-in-get-notified">
            <img src="https://icon2.cleanpng.com/20180613/jjo/kisspng-chairish-01504-season-gold-hanging-wall-decoration-5b21563e02d5c6.2857339915289114220116.jpg" />
            </div>   */}
            
            <div className="first-div-of-the-input-type-enter-your-email-address"
              
            >
              <div className="second-div-input-type-enter-your-email-address-Get-notified-you-can"
             >
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



          {/* this is the footer which includes home , company and help */}
          <div className="main-div-of-the-footer"
            
          >
            <div className="Interior-co">
              <h3>INTERIOR.CO</h3>
              <p>
                Build your site for free and <br />
                take as long as you need.
              </p>
              <div className="icons-for-the-footer"
              >
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
            <div className="footer-content" >
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
  );
}

export default Home;


