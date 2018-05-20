import React, { Component } from 'react';
import './App.css';

class TrackerDashboard extends Component {
  state = {
    miles: [],
  }

  render(){
    return(
      <div className='main'>
      <div className='welcome'>
        <h1>Welcome to the Mileage Tracker!</h1>
      </div>
      <div className='daily'>
        <DailyTracker
          miles = {this.props.miles}
        />
      </div>
    </div>
    )
  }
}

class DailyTracker extends Component{
  render(){
    return(
      <div className='tracker'>
        <form>
          <label>Enter Today's Mileage: </label>
          <input type='text' defaultValue={this.props.miles} />
        </form>
      </div>
    )
  }
}










export default TrackerDashboard;
