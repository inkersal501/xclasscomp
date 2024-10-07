import React, {Component} from "react";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      number:0
    }
  }
  handleIncrement = ()=>{
    this.setState(prev=>({number : prev.number+1}));
  };
  handleDecrement = ()=>{
    this.setState(prev=>({number : prev.number-1}));
  };
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.number}</p>
        <div>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
