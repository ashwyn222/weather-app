import React from 'react';
import './App.css';
import InputCity from './components/InputCity';
import WeatherDetails from './components/WeatherDetails';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: '',
      cityId: null,
      cityInfo: [{"id":707860,"name":"Hurzuf","country":"UA","coord":{"lon":34.283333,"lat":44.549999}},{"id":519188,"name":"India","country":"RU","coord":{"lon":37.666668,"lat":55.683334}},{"id":1283378,"name":"Gorkhā","country":"NP","coord":{"lon":84.633331,"lat":28}},{"id":1270260,"name":"State of Haryāna","country":"IN","coord":{"lon":76,"lat":29}},{"id":708546,"name":"Holubynka","country":"UA","coord":{"lon":33.900002,"lat":44.599998}},{"id":1283710,"name":"Bāgmatī Zone","country":"NP","coord":{"lon":85.416664,"lat":28}},{"id":529334,"name":"Mar’ina Roshcha","country":"RU","coord":{"lon":37.611111,"lat":55.796391}},{"id":1269750,"name":"Republic of India","country":"IN","coord":{"lon":77,"lat":20}}]
    }
  }

  submitCity = (city) => {
    this.setState({cityId: this.state.cityInfo.find(a => a.name === city).id});
  }

  render() {
    return (
      <div className="app">
        <div className="container f fd-c">
          <InputCity submitCity={this.submitCity}></InputCity>
          <WeatherDetails cityId={this.state.cityId}></WeatherDetails>
        </div>
      </div>
    );
  }
}

export default App;
