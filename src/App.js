import React, {Component} from "react";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  increment = ()=>{
    this.setState(prev=>({count : prev.count+1}));
  };
  decrement = ()=>{
    this.setState(prev=>({count : prev.count-1}));
  };
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
