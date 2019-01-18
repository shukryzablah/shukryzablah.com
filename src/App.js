import React, { Component } from 'react';
import './App.css';

function Name() {
    return <h1 className="name">Shukry Zablah</h1>;
}

function Links() {
    return(
        <div>
          <a href="https://www.github.com/shukryzablah">Github</a>
          <a href="https://drive.google.com/file/d/14jJHgxc7Tc95pqX1hvU29T_AX0DpGXW3/view?usp=sharing">Resume</a>
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
