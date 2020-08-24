import React from 'react';
import { Link } from 'react-router-dom';
import style from './WhatWeDo.module.css';
import Navbar from 'react-bootstrap/Navbar'

const WhatWeDo = (props) => {
  let WWD =
    <div className={style.container}>
      <h3>WHAT WE DO</h3>
      <h6 className={style.titletext}>
        Sunlight Airsystem offers heating, cooling, and air quality services for your home and office.
        If you need to stay cool for the summer we help repair and install breezy air conditioning units so you can enjoy the sun without feeling it.
        Or, if you want to beat the harsh winters, let us take a look at your furnace or boiler so you can be comfortable in your home or at work.
      </h6>
      <div className={style.graphics}>
        <div className={style.heating}>
          <h5>
            HEATING
          </h5>
          <ul>
            <li>Boiler & Water Heater</li>
            <li>Furnace</li>
            <li>Thermostats</li>
          </ul>
        </div>
        <div className={style.cooling}>
          <h5>
            COOLING
          </h5>
          <ul>
            <li>Air Conditioning</li>
            <li>Thermostats</li>
          </ul>
        </div>
        <div className={style.airquality}>
          <h5>
            AIR QUALITY
          </h5>
          <ul>
            <li>Humidifiers</li>
            <li>HRV/ERV</li>
            <li>High Density Filters</li>
            <li>UV Lights Air Purifier</li>
          </ul>
        </div>
      </div>
    </div>;

  return (
    <div>
      {WWD}
    </div>
  );
};

export default WhatWeDo;