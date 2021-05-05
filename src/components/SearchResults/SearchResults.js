
const SearchResults = ({ searchResults }) => {
  
  if(searchResults.Response === "True") {
    console.log('check')
    const resultsList = searchResults.Search.map(result => {
      return (
        <li>{result.Title} {result.Year}</li>
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