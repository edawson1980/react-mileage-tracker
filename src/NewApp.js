import React, { Component } from 'react';
import './App.css';

class TrackerDashboard extends Component {
  state = {
    miles: [],
  };

  handleEnterMiles = (m) =>{
    console.log('this is working')
    this.addMiles(m);
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
      </div>
    </div>
    )
  }
}

class DailyTracker extends Component{
  handleEnterMiles = () => {
    this.props.onEnterMiles();
  }
  render(){
    return(
      <div className='tracker'>
        <form>
          <label>Enter Today's Mileage: </label>
          <input type='text' defaultValue={this.props.miles} />
          <button
            className='daily-submit'
            onClick={this.handleEnterMiles}
          >
            Enter Miles
          </button>
        </form>
        <div className='total'>
          <h3>
            Today you ran {this.onClick} miles
          </h3>
        </div>
      </div>
    )
  }
}










export default TrackerDashboard;
