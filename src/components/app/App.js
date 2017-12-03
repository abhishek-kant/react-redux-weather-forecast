import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import SearchBar from "../../containers/SearchBar"
import WeatherList from "../../containers/WeatherList";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <SearchBar></SearchBar>
          <WeatherList></WeatherList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
