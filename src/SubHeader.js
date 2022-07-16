import React from "react";

export default function  SubHeader() {
    return (
      <div className="SubHeader">
      <div>
        <div className="title">Model Y</div>
        <div className="subtitle">2% Company Car Tax. Learn More</div>
      </div>
      <div className="sub-header">
         <button className="custom-order">CUSTOM ORDER</button>
         <button className="test-drive">TEST DRIVE</button>
         <div className="test-drive">Schedule a Test Drive</div>
      </div>
      </div>
    );
}