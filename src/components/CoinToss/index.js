import {Component} from 'react'
import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: headImgUrl,
    headCount: 0,
    tailCount: 0,
  }

  spinCoin = () => {
    const {headCount, tailCount} = this.state
    const count = Math.floor(Math.random() * 2)
    let imgUrl = ''
    let hCount = headCount
    let tCount = tailCount
    if (count === 0) {
      imgUrl = headImgUrl
      hCount += 1
    } else {
      tCount += 1
      imgUrl = tailImageUrl
    }

    this.setState({
      tossImage: imgUrl,
      headCount: hCount,
      tailCount: tCount,
    })
  }

  render() {
    const {tossImage, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    return (
      <div className="bg-container">
        <div className="coin-toss-game-card">
          <h1 className="heading-ele">Coin Toss Game</h1>
          <p className="para-ele">Heads (or) Tails</p>
          <img src={tossImage} className="toss-img" alt="toss result" />
          <button type="button" className="btn-ele" onClick={this.spinCoin}>
            Toss Coin
          </button>
          <div className="toss-count">
            <p>Total: {totalCount}</p>
            <p>Heads: {headCount}</p>
            <p>Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
