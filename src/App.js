import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1 className="header-text"> Ask The Magic Eight Ball!</h1>
        <EightBall />
      </div>
    );
  }

}

export default App;
