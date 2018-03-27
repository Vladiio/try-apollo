import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Apollo</h1>
        </header>

        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
