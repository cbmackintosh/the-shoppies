
const SearchResults = ({ searchResults, nominations, addNomination }) => {
  
  if(searchResults.Response === "True") {
    const resultsList = searchResults.Search.map(result => {
      return (
        <li>
          {result.Title} 
          ({result.Year})
          {nominations.includes(result) ? <button disabled>Nominate</button> : <button onClick={() => addNomination(result)}>Nominate</button>}
        </li>
      )
    })
    
    return (
      <div>
        <ul>
          {resultsList}
        </ul>
      </div>
    )
  } else {
    return (
      <h1>null</h1>
    )
  }

}

export default SearchResults