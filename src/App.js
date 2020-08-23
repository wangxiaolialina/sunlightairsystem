import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import WWD from './components/WhatWeDo/WhatWeDo';
import WCSL from './components/WhyChooseSL/WhyChooseSL';
// import SliderPage from 'react-slider-page';
import OurService from './components/OurService/OurService'
import SliderPage from 'react-slider-page';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll() {
    console.log("scroll");
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            <NavBar />
          } />
        </Switch>
        <div className="grey" id="HOME">
          <div><Home /></div>
        </div>
        <div id="what-we-do">
          <div><WWD /></div>
        </div>
        <div className="grey" id="why-choose-sunlight">
          <div><WCSL /></div>
        </div>
        <div id="our-service">
          <div> <OurService /> </div>
        </div>
        <div className="grey" id="customer-say">
          <div>WHAT OUR CUSTOMER SAY</div>
        </div>
        <div id="help">
          <div>HOW CAN WE HELP YOU</div>
        </div>
      </div>
    );
  }
}
export default App;
