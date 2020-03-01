import React, { Component } from 'react'

export default class InputCity extends Component {
    constructor() {
        super();
        this.state = {
            city: ''
        }
    }

    handleChange = (e) => {
        this.setState({city: e.target.value});
    }

    submitCity = (e) => {
        e.preventDefault();
        this.props.submitCity(this.state.city);
    }

    render() {
        return (
            <form onSubmit={ this.submitCity }>
                <input
                    className="search-input"
                    type="text"
                    value={this.state.city}
                    onChange={this.handleChange}
                />
                <input className="search-btn" type="submit" value="Submit" />
            </form>
        )
    }
}

