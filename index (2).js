import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    numState: 'Even',
  }

  onIncrement = () => {
    this.setState(prevState => {
      const randomNum = Math.floor(Math.random() * 101)
      const newCount = prevState.count + randomNum
      const evenOrOdd = newCount % 2 === 0 ? 'Even' : 'Odd'
      return {
        count :newCount,
        numState : evenOrOdd,
      }
    })
  }

  render() {
    const {count, numState} = this.state
    return (
      <div className="bg-container">
        <div className="inner-bg">
          <h1 className="heading">Count {count}</h1>
          <p>Count is {numState}</p>
          <button onClick={this.onIncrement}>Increment</button>
          <p>*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddAppimport {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    numState: 'Even',
  }

  onIncrement = () => {
    this.setState(prevState => {
      const randomNum = Math.floor(Math.random() * 101)
      const newCount = prevState.count + randomNum
      const evenOrOdd = newCount % 2 === 0 ? 'Even' : 'Odd'
      return {
        count :newCount,
        numState : evenOrOdd,
      }
    })
  }

  render() {
    const {count, numState} = this.state
    return (
      <div className="bg-container">
        <div className="inner-bg">
          <h1 className="heading">Count {count}</h1>
          <p>Count is {numState}</p>
          <button onClick={this.onIncrement}>Increment</button>
          <p>*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
