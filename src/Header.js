import React from "react";
import SubHeader from "./SubHeader";

export default function  Header() {
    return (
        <div className="Header">
          <div>
            Tesla
          </div>
          <div>
            <ul>
                <li>Model S</li>
                <li>Model 3</li>
                <li>Model X</li>
                <li>Model Y</li>
                <li>Powerwall</li>
                <li>Charging</li>
            </ul>
          </div>
          <div>
            <ul>
                <li>Support</li>
                <li>Shop</li>
                <li>Account</li>
                <li>Menu</li>
            </ul>
          </div>
          <SubHeader />
        </div>
    );
}