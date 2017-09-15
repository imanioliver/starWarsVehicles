import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="page-header">
                <form  onSubmit={this.props.handleFormSubmit} className="form-inline">
                    <h3>What is your name Pilot?</h3>
                    <input onChange={this.props.handleNameChange} className="form-group" value={this.props.pilot} type="text" placeholder="Enter Your Name"/>
                    <button className="form-group pull-right" type="submit" >Submit</button>
                    <br/>
                    <div>
                        <h3>{this.props.pilotName}</h3>
                    </div>
                </form>
            </div>


    )
  }
}
