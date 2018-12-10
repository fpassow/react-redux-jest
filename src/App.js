import React, { Component } from 'react';
import CounterButton from './CounterButton'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>App</h1>
          <CounterButton />
      </div>
    );
  }
}

export default App;
