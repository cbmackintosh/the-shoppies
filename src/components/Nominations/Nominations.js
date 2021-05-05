
const Nominations = ({ nominations, removeNomination }) => {
  
  if(nominations.length) {
    const nominationsList = nominations.map(nomination => {
      return (
        <li>
          {nomination.Title} 
          ({nomination.Year})
          <button onClick={() => removeNomination(nomination)}>Remove</button>
        </li>
      )
    })
    
    return (
      <div>
        <ul>
          {nominationsList}
        </ul>
      </div>
    )
  } else {
    return (
      <h1>null</h1>
    )
  }

}

export default Nominations