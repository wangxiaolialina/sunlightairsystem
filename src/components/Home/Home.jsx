import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
import Navbar from 'react-bootstrap/Navbar'
import logo from './backdrop.png'

const Home = (props) => {
  let home =
    <div className={style.HomeSection}>
      <div className={style.HomeContent}>
        <h1>Sunlight Air System</h1>
        <h5>Heating, cooling and air quality system services for your home and business in the Greater Toronto Area</h5>
        <button>
          REQUEST A QUOTE
      </button>
      </div>
    </div>;

  return (
    <div>
      {home}
    </div>
  );
};

export default Home;