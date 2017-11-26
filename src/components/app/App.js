import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import SearchBar from "../../containers/SearchBar"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <SearchBar></SearchBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
