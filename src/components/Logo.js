import React, { Component } from 'react'

class logos extends Component {
  render() {
    return (
      <img
        src={
          'https://s2.coinmarketcap.com/static/img/coins/16x16/' +
          this.props.id +
          '.png'
        }
      />
    )
  }
}

export default logos
