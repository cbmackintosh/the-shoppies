import React, { Component } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults = [],
      nominations = [],
    }
  }

  render() {
    return (
      <main className='app'>
        <h1>The Shoppies</h1>
        <SearchBar />
      </main>
    )
  }
}
