import React from "react";
import "./home.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
const Home = () => {
  return (
    <div className="home">
      <div id="vid">
        <video
          preload="auto"
          loop="true"
          autoPlay="autoplay"
          muted
          src="https://www.thedanceworx.com/video/tdx-23rd-birthday.mp4"
        ></video>
      </div>

      <div className="content">
        <div id="logo1">
          <img
            src="https://primeperformersagency.co.uk/cdn/shop/files/Janette_and_Aljaz_dancing.jpg?v=1668783383&width=550"
            alt="dance logo"
            height={400}
            width={500}
          />
        </div>
        <div id="adver">
          <p>
            There's something truly mystical and enthralling about classical
            dance forms. If you want to become the next Anitha Rathnam or
            Sunayana Hazarilal enroll at this world-famous institute that
            teaches Bharatanatyam and Kathak. This institute in Bangalore is
            widely regarded as one of the best places to learn classical dance.
          </p>
          <br />
          <br />
          <br />
          <p>
            You can also access a real, professional and international dance
            education in all of the above styles,no matter where you are located
            through our online dance classes!
          </p>
        </div>
      </div>
      <div className="social">
        <div id="followus">
          <h2>FOLLOW US ON</h2>
        </div>
        <div id="media">
          <ol>
            <li>
              <BsFacebook id="facebook" />
            </li>
            <li>
              <BsInstagram id="insta" />
            </li>
            <li>
              <BsTwitter id="twitter" />
            </li>
            <li>
              <BsYoutube id="yt" />
            </li>
          </ol>
        </div>
      </div>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};

export default Home;
