import React, { Component } from 'react'
import './SearchBar.scss'

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
      <div className='search-bar-container'>
        <h3 className='search-bar-header'>Movie title</h3>
        <input className='search-bar' onChange={e => this.runSearch(e)}></input>
      </div>
    )
  }

}