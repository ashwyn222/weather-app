import React, { Component } from 'react';
import Tile from '../components/Tile.js';
import axios from 'axios';

export default class WeatherDetails extends Component {
    constructor() {
        super();
        //http://samples.openweathermap.org/data/2.5/weather?id=${this.props.cityId}&appid=2dbe93d485a7fc29365445a9669b0e72
        this.state = {
            yesterday: [],
            today: [],
            tomorrow: []
        }
    }


    componentDidUpdate(prevProps) {
        if(prevProps.cityId !== this.props.cityId) {
            axios.get(`http://localhost:3001/yesterday`)
            .then(response => {
                this.setState({yesterday: response.data});
            });

            axios.get(`http://localhost:3001/today`)
            .then(response => {
                this.setState({today: response.data});
            });

            axios.get(`http://localhost:3001/tomorrow`)
            .then(response => {
                this.setState({tomorrow: response.data});
            });
        }
    }


    render() {
        return (
            <div className="content f">
                <Tile
                    title={'Yesterday'}
                    minTemp={this.state.yesterday.min_temp}
                    temp={this.state.yesterday.temp}
                    maxTemp={this.state.yesterday.max_temp}>
                </Tile>
                <Tile
                    title={'Today'}
                    minTemp={this.state.today.min_temp}
                    temp={this.state.today.temp}
                    maxTemp={this.state.today.max_temp}>
                </Tile>
                <Tile
                    title={'Tomorrow'}
                    minTemp={this.state.tomorrow.min_temp}
                    temp={this.state.tomorrow.temp}
                    maxTemp={this.state.tomorrow.max_temp}>
                </Tile>
            </div>
        )
    }
}
