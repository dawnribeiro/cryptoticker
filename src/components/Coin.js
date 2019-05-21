import React, { Component } from 'react'

class Coin extends Component {
  render() {
    return (
      <section>
        <figure>
          <h2>{this.props.name}</h2>
          <p>{this.props.symbol}</p>
          <p>{this.props.price}</p>
        </figure>
      </section>
    )
  }
}

export default Coin
