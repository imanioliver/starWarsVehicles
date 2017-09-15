import React, {Component} from 'react';
import '../styles/App.css';
import Form from './Form.js';
import Jumbotron from './Jumbotron.js';
import Card from './Card.js';


class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
    constructor(){
        super();

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);


        this.state = {
            vehicles: [],
            value: '',
            pilot: '',
            pilotName: ''
        };
    }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

    handleNameChange(event){
        this.setState({
            pilot: event.target.value
        });
    }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

    handleFormSubmit(event){

        event.preventDefault()
        const pilot = this.state.pilot;


        this.setState({
          pilot : "",
          pilotName: pilot

        })
        alert('Thank you, ' + pilot + ' your name was submitted');
     }


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
    componentDidMount(){
        let she = "awesome";
        fetch('https://swapi.co/api/vehicles/').then(results => {
          return results.json();
        }).then(data => {
            let bananas = data.results.map((whip, index) => {
                return (<Card key={index + 1} className="blah" whip={whip} imani={she}/>)
            })
            this.setState({vehicles: bananas})
        })
    }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render(){



    /*
    {
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    })
    */

    return (
      <div className="App">
        <Jumbotron/>

        <Form pilot={this.state.pilot} pilotName={this.state.pilotName} handleNameChange={this.handleNameChange} handleFormSubmit={this.handleFormSubmit}  empty={this.state.empty}/>

        {this.state.vehicles}


      </div>
    );
  }
}

export default App;
