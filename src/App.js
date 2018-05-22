import React, { Component } from 'react';
import Form from './Form.js'; //don't forget to import all your compnents!
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <h1 className="App-title">Welcome to myMileageTracker!</h1>

        <h3>Keep track of how far you run, and average your weekly distance with this handy tool!</h3>

        <Form />


      </div>
    );
  }
}

export default App;
