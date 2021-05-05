import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Movie title</h2>
        <input></input>
      </div>
    )
  }
}