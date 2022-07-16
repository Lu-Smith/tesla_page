import React from "react";
import Car1 from "./images/car1.jpg";
import "./Section.css";

export default function  Section() {
    return (
        <div className="Section">
            <img src={Car1} alt="Car one" />
        </div>
    );
}