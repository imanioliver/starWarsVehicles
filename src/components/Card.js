import React, { Component } from 'react';


export default class Card extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.imani);
    }
    render() {
        return (
            <div className="card">
              <div className="card-block">
                <h4 className="card-name">{this.props.whip.name}</h4>
                <h5 className="card-vehicle"> Model: {this.props.whip.model}</h5>
                <div className="card-specs">
                    <h5 className= "spec-title"> Specs</h5>
                    <div className= "all-specs">
                        <p className="specy">Manufacturer: {this.props.whip.manufacturer}</p>
                        <p className="specy">Class: {this.props.whip.vehicle_class}</p>
                        <p className="specy">Passengers: {this.props.whip.passengers}</p>
                        <p className="specy">Crew: {this.props.whip.crew}</p>
                        <p className="specy">Length: {this.props.whip.length}</p>
                        <p className="specy">Max Speed: {this.props.whip.max_atmosphering_speed}</p>
                        <p className="specy">Cargo Speed: {this.props.whip.cargo_capacity}</p>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}
