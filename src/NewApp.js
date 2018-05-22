import React, { Component } from 'react';
import DailyTracker from './DailyTracker';
import Form from './Form';
import './App.css';

class TrackerDashboard extends Component {
  state = {
    miles: '',
  };

  handleEnterMiles = (e) =>{
    console.log('this is working')

    this.addMiles();
  };

  addMiles = (m) => {
    this.setState({
      miles: this.state.miles.map((mile) => {
        return Object.assign({}, mile, {
          miles: mile + 1,
        })
      })
    });
  }

  render(){
    return(
      <div className='main'>
      <div className='welcome'>
        <h1>Welcome to the Mileage Tracker!</h1>
      </div>
      <div className='daily'>
        <DailyTracker
          miles = {this.state.miles}
          onEnterMiles = {this.handleEnterMiles}
        />
        <Form />

      </div>
    </div>
    )
  }
}











export default TrackerDashboard;
