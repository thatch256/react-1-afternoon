import React, {Component} from 'react'

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            vehicles: [
            {
                name: 'airplane',
                flight: true,
                wheels: 6
            },
            {
                name: 'bus',
                flight: false,
                passengers: 80
            },
            {
                name: 'motorcycle',
                wheels: 2,
                accidents: true
            }    
        ],
        userInput: '',
        filteredVehicles: []
        }
    }
    
    updateUserinput(value) {
        this.setState({userInput: value})
    }
    
    filterer(prop) {
        let vehicles = this.state.vehicles
        let filteredVehicles = []
        for (let i=0;i <vehicles.length; i++) {
            if (vehicles[i].hasOwnProperty(prop)) {
                filteredVehicles.push(vehicles[i])
            }
        }
        this.setState({filteredVehicles: filteredVehicles})
    }

    render () {
     return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: { JSON.stringify(this.state.vehicles, null, 10) }</span>
            <input className="inputLine" onChange={(e) => this.updateUserinput(e.target.value)}
            value={this.state.userInput}/>
            <button className="confirmationButton" onClick={ () => this.filterer(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredVehicles, null, 10) }</span>
        </div>
     )   
    }
}

export default FilterObject