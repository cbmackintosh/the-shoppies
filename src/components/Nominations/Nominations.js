import './Nominations.scss'

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
      <div className="nominations-container">
        <h3>Nominations:</h3>
        <ul>
          {nominationsList}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="nominations-container">
        <h3>You haven't nominated any movies.</h3>
      </div>
    )
  }

}

export default Nominations