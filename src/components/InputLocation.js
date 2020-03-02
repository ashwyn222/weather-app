import React, { Component } from 'react'

export default class InputLocation extends Component {
    constructor() {
        super();
        this.state = {
            lat: '',
            lon: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitLocation = (e) => {
        e.preventDefault();
        this.props.submitLocation(this.state.lat, this.state.lon);
    }

    render() {
        return (
            <form onSubmit={ this.submitLocation }>
                <input
                    className="lat-input"
                    type="text"
                    name="lat"
                    value={this.state.lat}
                    onChange={this.handleChange}
                    placeholder="Lat..."
                />
                <input
                    className="lon-input"
                    type="text"
                    name="lon"
                    value={this.state.lon}
                    onChange={this.handleChange}
                    placeholder="Lon..."
                />
                <input className="search-btn" type="submit" value="Submit" />
            </form>
        )
    }
}

