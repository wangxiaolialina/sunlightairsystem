import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
// import SliderPage from 'react-slider-page';
import OurService from './components/OurService/OurService'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            <NavBar />
          } />
        </Switch>
          <div className="grey" id="HOME">
            <div>Home</div>
          </div>
          <div id="what-we-do">
            <div>WHAT WE DO</div>
          </div>
          <div className="grey" id="why-choose-sunlight">
            <div>WHY CHOOSE SUNLIGHT</div>
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
