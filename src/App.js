import React, { Component } from 'react';
import './App.css';

function Name() {
    return <h1 className="name">Shukry Zablah</h1>;
}

function Links() {
    return(
        <div>
          <a href="https://www.github.com/shukryzablah">Github</a>
          <a href="https://drive.google.com/file/d/1bB3EOQ-S_m6bTVys86potqT6rHZP3duY/view?usp=sharing">Resume</a>
        </div>
    );
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
