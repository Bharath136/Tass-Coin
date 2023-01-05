import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, toss: 0}

  onToss = () => {
    const {toss} = this.state
    this.setState({
      toss: Math.floor(Math.random() * 2),
    })
    if (toss === 0) {
      this.setState(preState => ({
        heads: preState.heads + 1,
      }))
    } else if (toss !== 0) {
      this.setState(preState => ({
        tails: preState.tails + 1,
      }))
    }
    this.setState(preState => ({
      total: preState.total + 1,
    }))
  }

  render() {
    const {total, heads, tails, toss} = this.state

    const isToss =
      toss === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="status">Heads (or) Tails</p>
          <img src={isToss} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
