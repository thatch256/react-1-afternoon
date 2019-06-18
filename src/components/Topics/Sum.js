import React, {Component} from 'react'

class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    
    updateNum1(value) {
        this.setState({number1: parseInt(value, 10)})
    }
    
    updateNum2(value) {
        this.setState({number2: parseInt(value, 10)})
    }

    summer(number1, number2) {
        let sum = this.state.sum
        sum = number1 + number2
        this.setState({sum}) 
    }

    render () {
     return (
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(e) => this.updateNum1(e.target.value)}/>
            <input className="inputLine" onChange={(e) => this.updateNum2(e.target.value)}/>
            <button className="confirmationButton" onClick={() => this.summer(this.state.number1, this.state.number2)}>Add</button>
            <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
     )   
    }
}

export default Sum