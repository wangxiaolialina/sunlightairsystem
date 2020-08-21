import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            <NavBar />
          } />
        </Switch>
      </div>
    );
  }
}
export default App;
