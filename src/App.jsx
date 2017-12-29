import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline(){
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl placeholder="December 25, 2018"
            className="Deadline-input"
            onChange={event => this.setState({newDeadline: event.target.value})}
            onKeyPress={event => {
              if(event.charCode === 13) {
                event.preventDefault();
                this.changeDeadline();
              }
            }}
          />
          <Button className="btn-submit" bsStyle="info" onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
