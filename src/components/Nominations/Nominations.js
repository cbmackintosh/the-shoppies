
const Nominations = ({ nominations }) => {
  
  if(nominations.length) {
    const nominationsList = nominations.map(nomination => {
      return (
        <li>
          {nomination.Title} 
          ({nomination.Year})
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