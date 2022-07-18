import React from "react";
import "./SubHeader.css";

export default function  SubHeader() {
    return (
      <div className="SubHeader">
      <div>
        <h1 className="title">Model Y</h1>
        <p className="subtitle">2% Company Car Tax. <a href="./pages.learnMore.html" alt="Learn More">Learn More</a></p>
      </div>
      <div className="sub-header">
         <button className="custom-order">CUSTOM ORDER</button>
         <button className="test-drive">TEST DRIVE</button>
         <div className="test-drive-link">Schedule a Test Drive</div>
      </div>
      </div>
    );
}