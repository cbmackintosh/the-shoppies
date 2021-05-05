
import './SearchResults.scss'

const SearchResults = ({ searchResults, nominations, addNomination, query }) => {
  
  if(searchResults.Response === "True") {
    const resultsList = searchResults.Search.map(result => {
      return (
        <li key={result.imdbID}>
          {result.Title} 
          ({result.Year})
          {nominations.includes(result) ? <button disabled>Nominate</button> : <button onClick={() => addNomination(result)}>Nominate</button>}
        </li>
      )
    })
    
    return (
      <div className='search-results-container'>
        <h3>Showing results for "{query}"</h3>
        <ul>
          {resultsList}
        </ul>
      </div>
    )
  } else {
    return (
      <div className='search-results-container'>
        <h3>Showing results for "{query}"</h3>
        <p>{searchResults.Error}</p>
      </div>
    )
  } 

}

export default SearchResults