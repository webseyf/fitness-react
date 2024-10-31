import React from 'react';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import Heart from '../../assets/heart.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Calories from '../../assets/calories.png';
import Header from '../header/Header.jsx';
function Hero() {
  return (
    <div className="hero" id='/'>
      <div className="left-h">
        <Header />
        <div className="the-best-ad blur">
          <div></div>
          <span>The best fitness club in AASTU</span>
        </div>
        {/* hero heading */}
        <div className="hero-txt">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your Ideal body, and
              live up your life to fullest{' '}
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span className="up">expert coaches</span>
          </div>
          <div>
            <span>+999</span>
            <span className="up">members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span className="up">fitness program</span>
          </div>
        </div>

        {/* buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* right */}
      <div className="right-h blur">
        <button className="btn">JOIN Now</button>
 
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span className="rate"> Heart Rate </span>
          <span className="bpm"> 116 bpm</span>
        </div>
        {/* hero images */}
        <img src={hero_image} className="hero-image" alt="" />
        <img src={hero_image_back} className="hero-image_back" alt="" />

        {/* callleries */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
