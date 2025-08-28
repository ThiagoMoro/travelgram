import React from "react";
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div id="profile">
          <img src="/assets/Profile pic.png" alt="Profile picture of Isabella Torres" />
          <div>
            <h1>Isabella Torres</h1>
            <p>
              Passionate traveller, culture enthusiast, and food lover.   
              Here I share the stories captured in each snapshot, exploring
              fascinating corners of our planet from the bustling city of São Paulo. 
            </p>
          </div>
        </div>
        <ul id="info">
          <li>
            <img src="/assets/icons/MapPin.svg" alt="Map icon" />
            <span>São Paulo, Brazil</span>
          </li>
          <li>
            <img src="/assets/icons/AirplaneTilt.svg" alt="Airplane icon" />
            <span>37 countries</span>
          </li>
          <li>
            <img src="/assets/icons/Image.svg" alt="Image icon" />
            <span>240 photos</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
