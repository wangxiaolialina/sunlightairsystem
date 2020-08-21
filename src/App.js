import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SliderPage from 'react-slider-page';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SliderPage>
        <Switch>
          <Route exact path='/' render={() =>
            <NavBar />
          } />
        </Switch>
          <section id="HOME">
            <div>Home</div>
          </section>
          <section id="what-we-do">
            <div>WHAT WE DO</div>
          </section>
          <section id="why-choose-sunlight">
            <div>WHY CHOOSE SUNLIGHT</div>
          </section>
          <section id="our-service">
            <div>OUR SERVICE</div>
          </section>
          <section id="customer-say">
            <div>WHAT OUR CUSTOMER SAY</div>
          </section>
          <section id="help">
            <div>HOW CAN WE HELP YOU</div>
          </section>
        </SliderPage>
      </div>
    );
  }
}
export default App;
