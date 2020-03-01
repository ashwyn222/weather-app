import React, { Component } from 'react'

export default class Tile extends Component {
    render() {
        return (
            <div className="tile">
                <h4>{this.props.title}</h4>
                <div>Min Temp: {this.props.minTemp}</div>
                <div>Temp: {this.props.temp}</div>
                <div>Max Temp: {this.props.maxTemp}</div>
            </div>
        )
    }
}
