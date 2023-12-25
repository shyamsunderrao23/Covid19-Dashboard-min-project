/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import Header from '../Header'
import Footer from '../Footer'
import StatesInfo from '../StatesInfo'
import './index.css'

// states Data
const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    searchInput: '',
    statesInfo: [],
    isLoading: true,
    totalConformedCases: 0,
    totalActiveCases: 0,
    totalRecoveredCases: 0,
    totalDeceasedCases: 0,
  }

  componentDidMount() {
    this.getAllStatesData()
  }

  getAllStatesData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      let nationalWideConformedCases = 0
      let nationalWideActiveCases = 0
      let nationalWideRecoveredCases = 0
      let nationalWideDeceasedCases = 0

      statesList.forEach(state => {
        if (data[state.state_code]) {
          const {total} = data[state.state_code]
          nationalWideConformedCases += total.confirmed ? total.confirmed : 0
          nationalWideRecoveredCases += total.recovered ? total.recovered : 0
          nationalWideDeceasedCases += total.deceased ? total.deceased : 0
        }
      })
      nationalWideActiveCases +=
        nationalWideConformedCases -
        (nationalWideRecoveredCases + nationalWideDeceasedCases)

      const states = statesList.map(each => ({
        stateName: each.state_name,
        stateCode: each.state_code,
        confirmed: Object.keys(data)
          .filter(state => state === each.state_code)
          .map(e => data[e].total.confirmed),
        recovered: Object.keys(data)
          .filter(state => state === each.state_code)
          .map(e => data[e].total.recovered),
        deceased: Object.keys(data)
          .filter(state => state === each.state_code)
          .map(e => data[e].total.deceased),
        other: Object.keys(data)
          .filter(state => state === each.state_code)
          .map(e => data[e].total.other),
        population: Object.keys(data)
          .filter(state => state === each.state_code)
          .map(e => data[e].meta.population),
      }))

      this.setState({
        statesInfo: states,
        isLoading: false,
        totalConformedCases: nationalWideConformedCases,
        totalActiveCases: nationalWideActiveCases,
        totalRecoveredCases: nationalWideRecoveredCases,
        totalDeceasedCases: nationalWideDeceasedCases,
      })
    }
  }

  onClickAscendingOrderBtn = () => {
    const {statesInfo} = this.state
    const sortedList = statesInfo.sort((a, b) => {
      const x = a.stateName.toUpperCase()
      const y = b.stateName.toUpperCase()
      return x > y ? 1 : -1
    })
    this.setState({statesInfo: sortedList})
  }

  onClickDescendingOrderBtn = () => {
    const {statesInfo} = this.state
    const sortedList = statesInfo.sort((a, b) => {
      const x = a.stateName.toUpperCase()
      const y = b.stateName.toUpperCase()
      return x < y ? 1 : -1
    })
    this.setState({statesInfo: sortedList})
  }

  renderingAllStatesList = () => {
    const {statesInfo} = this.state

    return (
      <div className="state-list-container" testid="stateWiseCovidDataTable">
        <div className="state-table-header">
          <div className="statesList-container">
            <p className="state-list-title">States/UT</p>
            <button
              type="button"
              testid="ascendingSort"
              className="ascending-btn-icon"
              onClick={this.onClickAscendingOrderBtn}
            >
              <FcGenericSortingAsc className="asc-icon" />
            </button>
            <button
              type="button"
              testid="descendingSort"
              className="descending-btn-icon"
              onClick={this.onClickDescendingOrderBtn}
            >
              <FcGenericSortingDesc className="desc-icon" />
            </button>
          </div>
          <div className="state-confirmed-list">
            <p className="conform-table">Confirmed</p>
          </div>
          <div className="state-active-list">
            <p className="active-table">Active</p>
          </div>
          <div className="state-recovered-list">
            <p className="recovered-table">Recovered</p>
          </div>
          <div className="state-deceased-list">
            <p className="deceased-table">Deceased</p>
          </div>
          <div className="state-population-list">
            <p className="population-table">Population</p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="states-lists-table">
          <ul className="ul-state-lists">
            {statesInfo.map(eachState => (
              <StatesInfo key={eachState.stateCode} statesData={eachState} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div className="loader-container" testid="homeRouteLoader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderingSearchInput = () => {
    const {searchInput} = this.state
    return (
      <>
        <div className="search-container">
          <label htmlFor="search" className="search-icon-btn">
            <BsSearch />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Enter the State"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            className="search-input"
          />
        </div>
      </>
    )
  }

  renderingCovid19Status = () => {
    const {
      totalConformedCases,
      totalActiveCases,
      totalRecoveredCases,
      totalDeceasedCases,
    } = this.state
    return (
      <>
        <div className="ul-covid-19-status">
          <div className="conform" data-testid="countryWideConfirmedCases">
            <p className="conform-heading">Confirmed</p>
            <img
              src="https://res.cloudinary.com/dh7ed1uf5/image/upload/v1703331603/check-mark_1_cjfmtq.jpg"
              alt="country wide confirmed cases pic"
              className="conformed-logo"
            />
            <p className="conform-count">{totalConformedCases}</p>
          </div>

          <div className="active" data-testid="countryWideActiveCases">
            <p className="active-heading">Active</p>
            <img
              src="https://res.cloudinary.com/dh7ed1uf5/image/upload/v1703354095/protection_1_hwzoau.jpg"
              alt="country wide active cases pic"
              className="active-logo"
            />
            <p className="active-count">{totalActiveCases}</p>
          </div>

          <div className="recovered" data-testid="countryWideRecoveredCases">
            <p className="recovered-heading">Recovered</p>
            <img
              src="https://res.cloudinary.com/dh7ed1uf5/image/upload/v1703354384/recovered_1_azsiy0.jpg"
              alt="country wide recovered cases pic"
              className="recovered-logo"
            />
            <p className="recovered-count">{totalRecoveredCases}</p>
          </div>

          <div className="deceased" data-testid="countryWideDeceasedCases">
            <p className="deceased-heading">Deceased</p>
            <img
              src="https://res.cloudinary.com/dh7ed1uf5/image/upload/v1703354699/breathing_1_pmnrlu.jpg"
              alt="country wide deceased cases pic"
              className="deceased-logo"
            />
            <p className="deceased-count">{totalDeceasedCases}</p>
          </div>
        </div>
      </>
    )
  }

  render() {
    return (
      <div className="home-app-container">
        <Header />
        <div className="main-container">
          {this.renderingSearchInput()}
          {this.renderingCovid19Status()}
          {this.renderingAllStatesList()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
