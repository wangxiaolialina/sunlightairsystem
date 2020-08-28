import React from 'react';
import { Link } from 'react-router-dom';
import style from './WhatWeDo.module.css';
import Navbar from 'react-bootstrap/Navbar'

const WhatWeDo = (props) => {
  let WWD =
    <div className={style.container}>
      <h3 className={style.titleHeader}>WHAT WE DO</h3>
      <h6 className={style.titleText}>
        Sunlight Airsystem offers heating, cooling, and air quality services for your home and office.
        If you need to stay cool for the summer we help repair and install breezy air conditioning units so you can enjoy the sun without feeling it.
        Or, if you want to beat the harsh winters, let us take a look at your furnace or boiler so you can be comfortable in your home or at work.
      </h6>
      <div className={style.graphics}>
        <div className={style.heating}>
          <h5 className={style.graphicHeader}>
            HEATING
          </h5>
          <ul>
            <li className={style.listItem}>Boiler & Water Heater</li>
            <li className={style.listItem}>Furnace</li>
            <li className={style.listItem}>Thermostats</li>
          </ul>
        </div>
        <div className={style.cooling}>
          <h5 className={style.graphicHeader}>
            COOLING
          </h5>
          <ul>
            <li className={style.listItem}>Air Conditioning</li>
            <li className={style.listItem}>Thermostats</li>
            <li className={style.listItem}>Refrigeration</li>
          </ul>
        </div>
        <div className={style.airquality}>
          <h5 className={style.graphicHeader}>
            AIR QUALITY
          </h5>
          <ul>
            <li className={style.listItem}>Humidifiers</li>
            {/* <li className={style.listItem}>HRV/ERV</li> */}
            <li className={style.listItem}>High Density Filters</li>
            <li className={style.listItem}>UV Lights Air Purifier</li>
          </ul>
        </div>
      </div>
      <div className={style.footHeader}>
        <h4 className={style.footText}>
          PLANNING & INSTALLATION
          <span className={style.dot}>&bull;</span>
          DIAGNOSIS & REPAIR
          <span className={style.dot}>&bull;</span>
          MAINTENANCE
        </h4>
      </div>
    </div>;

  return (
    <div>
      {WWD}
    </div>
  );
};

export default WhatWeDo;