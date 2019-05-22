import React, { Component } from 'react'
import Coin from './Coin'

class CoinContainer extends Component {
  state = {
    currencies: []
  }
  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        console.log({
          json
        })
        this.setState({
          currencies: Object.values(json.data)
        })
      })
  }
  // set interval

  render() {
    return (
      <>
        <section className="coinContainer">
          {this.state.currencies.map(currency => {
            return (
              <>
                <Coin
                  name={currency.name}
                  symbol={currency.symbol}
                  price={currency.quotes.USD.price}
                />
              </>
            )
          })}
        </section>
      </>
    )
  }
}
export default CoinContainer
