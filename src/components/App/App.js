import React, { Component } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import { searchTitles } from '../../api-calls'
import SearchResults from '../SearchResults/SearchResults'
import Nominations from '../Nominations/Nominations'

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

  addNomination = (movie) => {
    this.setState({ nominations: [...this.state.nominations, movie] })
  }

  removeNomination = (movie) => {
    const arr = this.state.nominations
    arr.splice(arr.indexOf(movie), 1)
    this.setState({ nominations: arr})
  }

  render() {
    console.log(this.state)
    return (
      <main className='app'>
        <h1>The Shoppies</h1>
        {this.state.nominations.length === 5 && <h1>You have selected your five movies!</h1>}
        <SearchBar searchMovies={this.searchMovies} />
        <SearchResults searchResults={this.state.searchResults} nominations={this.state.nominations} addNomination={this.addNomination} />
        <Nominations nominations={this.state.nominations} removeNomination={this.removeNomination} />
      </main>
    )
  }
}
