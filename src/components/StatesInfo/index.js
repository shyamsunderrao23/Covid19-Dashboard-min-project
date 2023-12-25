import {Link} from 'react-router-dom'
import './index.css'

const StatesInfo = props => {
  const {statesData} = props
  const {
    stateName,
    confirmed,
    recovered,
    deceased,
    other,
    population,
    stateCode,
  } = statesData
  const active = confirmed - recovered - deceased - other

  return (
    <>
      <li className="list-all-cases ">
        <div className="states-container-home">
          <Link to={`/state/${stateCode}`} className="link-home">
            <p className="states-names-home">{stateName}</p>
          </Link>
        </div>
        <div className="confirmed-columns">
          <p className="confirmed-home">{confirmed}</p>
        </div>
        <div className="active-columns">
          <p className="active-home">{active}</p>
        </div>
        <div className="recovered-columns">
          <p className="recovered-home">{recovered}</p>
        </div>
        <div className="deceased-columns">
          <p className="deceased-home">{deceased}</p>
        </div>
        <div className="population-columns">
          <p className="population-home">{population}</p>
        </div>
      </li>
    </>
  )
}

export default StatesInfo
