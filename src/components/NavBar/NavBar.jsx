import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'
import logo from './sunlight.png'
const NavBar = (props) => {
  let nav =
    <>
      <div className='image-div'>
        <img
          src={logo}
          width="300"
          height="300"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </div>
      <div className='quote-section'>
        <div className='text-container'>
          <span className='text'>
            Call (416) 123 - 4567
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className='text'>
            Serving the GTA
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className='text'>
            Monday - Saturday: 8AM - 10PM
          </span>
          &nbsp;&nbsp;&nbsp;
        <button>
            REQUEST A QUOTE
        </button>
        </div>
        <Navbar className='Navbar justify-content-end'>
          <Link to='' className='NavBar-link'>HEATING</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link'>COOLING</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link'>AIR QUALITY</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link'>RESIDENTIAL</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link'>COMMERCIAL</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='' className='NavBar-link'>ABOUT</Link>
        </Navbar>
      </div>
    </>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;