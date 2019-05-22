import React, { Component } from 'react'

class Coin extends Component {
  render() {
    return (
      <section className="coin">
        <div className="">
          <h1 className="name">{this.props.name}</h1>
          <h2>{this.props.symbol}</h2>
          <h2>{this.props.price}</h2>
        </div>
      </section>
    )
  }
}

export default Coin
