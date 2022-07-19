import React from "react";
import "./SubHeader.css";
import DownIcon from "./images/downsign.svg";


export default function  SubHeader() {
    return (
      <div className="SubHeader">
      <div>
        <h1 className="title">Model Y</h1>
        <p className="subtitle">2% Company Car Tax. <a href="./pages.learnMore.html" alt="Learn More">Learn More</a></p>
      </div>
      <div className="sub-header">
        <div className="buttons" >
         <button className="custom-order">CUSTOM ORDER</button>
         <button className="test-drive">TEST DRIVE</button>
         </div>
         <div className="schedule-test-drive">
         <a href="./pages/testDrive.html" alt="Schedule a Test Dive" className="test-drive-link">Schedule a Test Drive </a>
         <div className="down-icon">
         <img src={DownIcon} alt="Down Icon" />
         </div>
         </div>


      </div>
      </div>
    );
}