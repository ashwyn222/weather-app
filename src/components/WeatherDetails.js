import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios';
import ClearDay from '../images/clear-day.svg';
import ClearNight from '../images/clear-night.svg';
import PartlyCloudyDay from '../images/partly-cloudy-day.svg';
import PartlyCloudyNight from '../images/partly-cloudy-night.svg';
import Cloudy from '../images/cloudy.svg';
import Rain from '../images/rain.svg';
import Sleet from '../images/sleet.svg';
import Snow from '../images/snow.svg';
import Wind from '../images/wind.svg';
import Fog from '../images/fog.svg';
const apiKey = 'f1c1ecc5373fb7c11c2610e2363563a8';

export default class WeatherDetails extends Component {
    constructor() {
        super();
        this.state = {
            currentTime: '',
            timezone: '',
            currentTemperature: '',
            weatherIcon: ''
        }
    }


    componentDidUpdate(prevProps) {
        if(prevProps.lat !== this.props.lat || prevProps.lon !== this.props.lon) {
            const { lat, lon } = this.props;
            axios.get(`https://api.darksky.net/forecast/${apiKey}/${lat},${lon}?exclude=daily,minutely,alerts,flags`)
                .then(response => {
                    this.setState({
                        currentTime: moment.unix(response.data.currently.time).format('MMMM D, YYYY'),
                        timezone: response.data.timezone,
                        currentTemperature: response.data.currently.temperature,
                        weatherIcon: response.data.currently.icon
                    })
                }
            );
        }
    }

    renderWeatherIcon() {

        const icons = [
          { weather: 'clear-day', image: ClearDay, styles: 'rotating-sun' },
          { weather: 'clear-night', image: ClearNight, styles: 'rocking-moon' },
          { weather: 'partly-cloudy-day', image: PartlyCloudyDay, styles: 'disappearing-sun' },
          { weather: 'partly-cloudy-night', image: PartlyCloudyNight, styles: 'disappearing-moon' },
          { weather: 'cloudy', image: Cloudy, styles: 'heavy-clouds' },
          { weather: 'rain', image: Rain, styles: 'falling-rain' },
          { weather: 'sleet', image: Sleet, styles: 'snow-rain-combo' },
          { weather: 'snow', image: Snow, styles: 'snow-fall' },
          { weather: 'wind', image: Wind, styles: 'gusty-winds' },
          { weather: 'fog', image: Fog, styles: 'dense-fog' }
        ];

        return icons.map((item, index) => {
          if(this.state.weatherIcon === item.weather) {
            return (
              <div className='weather-icon' key={ index }>
                <img className={ item.styles } src={ item.image } alt='weather icon' />
              </div>
            )
          } else {
            return null;
          }
        });
    }


    render() {
        return (
            <div className="content">
                {
                    this.state.timezone && 
                    <React.Fragment>
                        <div>
                            <p><label>Region:</label> { this.state.timezone }</p>
                            <p><label>Date:</label> { this.state.currentTime }</p>
                            <p><label>Temperature:</label> { this.state.currentTemperature } &#8457;</p>
                        </div>
                        { this.renderWeatherIcon() }
                    </React.Fragment>
                }
            </div>
        )
    }
}
