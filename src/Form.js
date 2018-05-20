import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props);
    //inital state of 'value' is empty
    this.state = {value: ''};

    //bind the event handlers to 'this'
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //function takes an argument 'event' and sets the State of 'this' to whatever is inputted for value
  handleChange(event){
    this.setState({value: event.target.value});
  }

  //function responds to the event (in this case 'event' is Submitting the form)
  handleSubmit(event){
    //preventDefault stops the form from technically submitting (sending a get request somewhere with that info)
    event.preventDefault();
    console.log(`You ran ${this.state.value} miles today!  Awesome!`);
  }



  render(){
    return(
      <div className='Form'>
        <h2>Enter Your Miles Here:</h2>


        <form onSubmit={this.handleSubmit}>
          <label>
            Miles:
            {/*using defaultValue instead of value makes the state of this field mutuable. i.e. allows the
              user to actually type something in. if the field has 'value' instead of 'defaultValue', the
              form field becomes read-only*/}
            <input type="text" defaultValue={this.state.value} onChange={this.handleChange} />
          </label>

            <input type="submit" value="Submit" />

        </form>

        <h3> you ran {this.state.value} miles</h3>

      </div>
    )
  }
};

export default Form;
