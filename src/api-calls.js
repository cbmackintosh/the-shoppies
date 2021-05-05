
export const searchTitles = query => {
  return fetch(`http://www.omdbapi.com/?apikey=4b28e689&s=${query}`)
  .then(response => response.json())
}