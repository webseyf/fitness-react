import React from 'react';
import "./Reasons.css"
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

function Reasons() {
  return (
    <div className="Reasons" id="why">
      <div className="left">
        <img src="/pexels-pixabay-414029.jpg" alt="" />
        <img src="/pexels-photo-116078.jpeg" alt="" />
        <img src="/pexels-binyaminmellish-116079.jpg" alt="" />
        <img src="/pexels-823sl-2294403.jpg" alt="" />
      </div>

      <div className="right-r blur">
        <span style={{color: "var(--orange)"}}>SOME REASONS</span>

        <div >
          <span className="stroke-text">WHY </span>
          <span className='why'>CHOOSE US❔</span>
        </div>
        <div>
          <div>
            <img src={tick} alt="" />
            <span>OVER +140 EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span style={{ color: 'var(--gray)', fontWeight: 'normal', fontSize: "33px" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
