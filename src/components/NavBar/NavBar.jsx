import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar'
import logo from './sunlight.png'
const NavBar = (props) => {
  let nav =
    <>
      <div className={style.imagediv}>
        <img
          src={logo}
          width="300"
          height="300"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </div>
      <div className={style.quotesection}>
        <div className={style.textcontainer}>
          <span className={style.text}>
            Call (416) 123 - 4567
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className={style.text}>
            Serving the GTA
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className={style.text}>
            Monday - Saturday: 8AM - 10PM
          </span>
          &nbsp;&nbsp;&nbsp;
        <button>
            REQUEST A QUOTE
        </button>
        </div>
        <Navbar className={style.Navbar}>
          <Link to='' className={style.NavBarlink}><span className={style.strong}>HEATING</span></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className={style.NavBarlink}><span className={style.strong}>COOLING</span></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className={style.NavBarlink}><span className={style.strong}>AIR QUALITY</span></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className={style.NavBarlink}>RESIDENTIAL</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className={style.NavBarlink}>COMMERCIAL</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className={style.NavBarlink}>ABOUT</Link>
        </Navbar>
      </div>
    </>;

  return (
    <div className={style.NavBar}>
      {nav}
    </div>
  );
};

export default NavBar;