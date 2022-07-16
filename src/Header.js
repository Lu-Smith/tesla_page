import React from "react";
import SubHeader from "./SubHeader";
import Logo from "./images/logo.png"
import "./Header.css";

export default function  Header() {
    return (
        <div className="Header">
            <div className="top-header">
          <div>
            <img src={Logo} alt="Tesla logo" className="logo"/>
          </div>
          <div className="middle-header">
            <ul>
                <li>Model S</li>
                <li>Model 3</li>
                <li>Model X</li>
                <li>Model Y</li>
                <li>Powerwall</li>
                <li>Charging</li>
            </ul>
          </div>
          <div className="end-header">
            <ul>
                <li>Support</li>
                <li>Shop</li>
                <li>Account</li>
                <li>Menu</li>
            </ul>
          </div>
          </div>
          <SubHeader />
        </div>
    );
}