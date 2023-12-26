import {Link} from 'react-router-dom'
import './index.css'

const AlterStatesInfo = props => {
  const {statesData} = props
  const {
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
        <div className="st-container-home">
          <Link to={`/state/${stateCode}`} className="link-home">
            <p className="st-names-home">{stateCode}</p>
          </Link>
        </div>
        <div className="con-columns">
          <p className="con-home">{confirmed}</p>
        </div>
        <div className="act-columns">
          <p className="act-home">{active}</p>
        </div>
        <div className="rec-columns">
          <p className="rec-home">{recovered}</p>
        </div>
        <div className="dec-columns">
          <p className="dec-home">{deceased}</p>
        </div>
        <div className="pop-columns">
          <p className="pop-home">{population}</p>
        </div>
      </li>
    </>
  )
}

export default AlterStatesInfo
