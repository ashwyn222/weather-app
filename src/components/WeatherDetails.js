import React, { Component } from 'react';
import Tile from '../components/Tile.js';
import axios from 'axios';

export default class WeatherDetails extends Component {
    constructor() {
        super();
        this.state = {
            weatherInfo: []
        }
    }


    componentDidUpdate(prevProps) {
        if(prevProps.cityId !== this.props.cityId) {
            axios.get(`http://samples.openweathermap.org/data/2.5/weather?id=${this.props.cityId}&appid=2dbe93d485a7fc29365445a9669b0e72`)
            .then(response => {
                console.log(response.data);
                this.setState({weatherInfo: response.data.main});
            });
        }
    }


    render() {
        const { temp_min, temp, temp_max } = this.state.weatherInfo; 
        return (
            <div className="content f">
                <div>City Id: {this.props.cityId}</div>
                <Tile minTemp={temp_min} temp={temp} maxTemp={temp_max}></Tile>
            </div>
        )
    }
}
