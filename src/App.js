import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      weatherinfo: []
    }
  }

  handleChange(e) {
    console.log(this.state.query);
    //this.setState({ query: e.target.value });
    this.sendRequest();
  }

  sendRequest() {
    fetch('http://samples.openweathermap.org/data/2.5/weather?id=1264527&appid=2dbe93d485a7fc29365445a9669b0e72')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({weatherinfo: result});
        },
        (error) => {
          console.log("error occurred while retrieving weather details");
        }
      )
  }

  render() {
    return (
      <div className="app">
        <div className="container f fd-c">
          
          <div className="header">
            <input
              className="search-input"
              type="text"
              value={this.state.query}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="content f">
            <div className="tile">{this.state.weatherinfo?.coord.lat} - {this.state.weatherinfo?.coord.lon}</div>
            <div className="tile">
              Temperature: {this.state.weatherinfo.main.temp}<br></br>
              Pressure: {this.state.weatherinfo.main.pressure}<br></br>
              Humidity: {this.state.weatherinfo.main.humidity}<br></br>
              Min Temp: {this.state.weatherinfo.main.temp_min}<br></br>
              Max temp: {this.state.weatherinfo.main.temp_max}<br></br>
            </div>
            <div className="tile">Tomorrow - {this.state.weatherinfo[2]}</div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
