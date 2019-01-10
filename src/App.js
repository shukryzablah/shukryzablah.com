import React, { Component } from 'react';
import './App.css';

function Name() {
    return <h1 className="name">Shukry Zablah</h1>;
}

function Links() {
    return <a href="https://www.github.com/shukryzablah">Github</a>;
}

class App extends Component {
  render() {
      return (
          <div className="container">
            <div className="info">
              <Name />
              <Links />
            </div>
          </div>
    );
  }
}

export default App;
