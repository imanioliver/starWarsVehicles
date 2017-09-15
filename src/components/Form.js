import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (

            <form  onSubmit={this.props.handleFormSubmit} className="form-inline">
                <h3>What is your name Pilot?</h3>
                <input onChange={this.props.handleNameChange} className="form-group" value={this.props.pilot} type="text" placeholder="Enter Your Name"/>
                <button className="form-group pull-right" type="submit" >Submit</button>
                <h3>{this.props.pilotName}</h3>
            </form>


    )
  }
}
