import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  runSearch = e => {
    this.setState({ query: e.target.value }, () => {
      this.props.searchMovies(this.state.query)
    })
  }

  render() {
    return (
      <div>
        <h2>Movie title</h2>
        <input onChange={e => this.runSearch(e)}></input>
      </div>
    )
  }

}