import React, { Component } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import { searchTitles } from '../../api-calls'
import SearchResults from '../SearchResults/SearchResults'
import Nominations from '../Nominations/Nominations'
import CompletionBanner from '../CompletionBanner/CompletionBanner'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      nominations: [],
      searchQuery: ''
    }
  }

  searchMovies = (query) => {
    searchTitles(query)
    .then(data => this.setState({ searchResults: data, searchQuery: query }))
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
        <h1 className='site-header'>The Shoppies</h1>
        {this.state.nominations.length === 5 && <CompletionBanner />}
        <SearchBar searchMovies={this.searchMovies} />
        <div className='list-container'>
          <SearchResults 
            searchResults={this.state.searchResults} 
            nominations={this.state.nominations} 
            addNomination={this.addNomination} 
            query={this.state.searchQuery} 
          />
          <Nominations 
            nominations={this.state.nominations} 
            removeNomination={this.removeNomination} 
          />
        </div>     
      </main>
    )
  }
}
