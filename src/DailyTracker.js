import React, {Component} from 'react';
import Form from './Form.js';
import './DailyTracker.css';

class DailyTracker extends Component{
  handleEnterMiles = () => {
    this.props.onEnterMiles();
  }
  render(){
    return(
      <div className='tracker'>
        <Form />
      </div>
    )
  }
}

export default DailyTracker
