import React from 'react';
import './App.css';
import InputLocation from './components/InputLocation';
import WeatherDetails from './components/WeatherDetails';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      lat: '',
      lon: ''
    }
  }

  submitLocation = (lat, lon) => {
    this.setState({lat: lat});
    this.setState({lon: lon});
  }

  render() {
    return (
      <div className="app">
        <div className="container f fd-c">
          <InputLocation submitLocation={this.submitLocation}></InputLocation>
          <WeatherDetails lat={this.state.lat} lon={this.state.lon}></WeatherDetails>
        </div>
      </div>
    );
  }
}

export default App;
