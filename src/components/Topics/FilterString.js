import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            foods: ['ice cream', 'pancakes', 'pizza', 'pickles', 'pho', 'waffles', 'borscht', 'gruel'],
            userInput: '',
            filteredFoods: []
        }
    }

    updateUserInput(value) {
        this.setState({userInput: value})
    }

    filterer(userInput) {
        let foods = this.state.foods
        let filteredFoods = []
        for (let i = 0; i <foods.length; i++) {
            if (foods[i].includes(userInput)) {
                filteredFoods.push(foods[i])
            }
        }
        this.setState({filteredFoods: filteredFoods})
    }

    render () {
     return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Foods: {JSON.stringify(this.state.foods, null, 10) }</span>
            <input className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value)}
            value={this.state.userInput}/>
            <button className="confirmationButton" onClick={ ()=> this.filterer(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterStringRB">Filtered Foods: { JSON.stringify(this.state.filteredFoods, null, 10) }</span>
        </div>
     )   
    }
}

export default FilterString