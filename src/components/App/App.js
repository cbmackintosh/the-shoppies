import React, { Component } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import { searchTitles } from '../../api-calls'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      nominations: [],
    }
  }

  searchMovies = (query) => {
    searchTitles(query)
    .then(data => this.setState({ searchResults: data }))
  }

  render() {
    console.log(this.state)
    return (
      <main className='app'>
        <h1>The Shoppies</h1>
        <SearchBar searchMovies={this.searchMovies} />
      </main>
    )
  }
}
