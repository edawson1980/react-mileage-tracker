import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    console.log(`You ran ${this.state.value} miles today!  Awesome!`);
    event.preventDefault();
  }

  render(){
    return(
      <div className='Form'>
        <h2>Enter Your Miles Here:</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Miles:
            <input type="text" defaultValue={this.state.value} onChange={this.handleChange}  />
          </label>
          <input type="submit" value="Submit"/>
        </form>

      </div>
    )
  }
};

export default Form;
