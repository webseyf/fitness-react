import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData.js';
import RightArrow from '../../assets/rightArrow.png';
function Programs() {
  return (
    <div className="programs" id='programs'>
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore <br /> Our</span>
        <span>Progress</span>
        <span className="stroke-text">to Shape <br />  you👉</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => {
          return (
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Programs;
