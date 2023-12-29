import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  state = {isToggleActive: false}

  whenToggleButtonClick = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  showDropDownMenu = () => (
    <>
      <ul className="navBar">
        <Link to="/" className="link">
          <li className="item">Home</li>
        </Link>

        <li className="item">Vaccination</li>

        <Link to="/about" className="link">
          <li className="item">About</li>
        </Link>
      </ul>
    </>
  )

  render() {
    const {isToggleActive} = this.state
    console.log(isToggleActive)
    return (
      <>
        <div className="header-container">
          <Link to="/" className="link">
            <h1 className="logo">COVID19INDIA</h1>
          </Link>
          <ul className="navBar">
            <Link to="/" className="link">
              <li className="item">Home</li>
            </Link>

            <li className="item">Vaccination</li>

            <Link to="/about" className="link">
              <li className="item">About</li>
            </Link>
          </ul>
        </div>
        <div className="mobile-menu">
          <div className="mobile-header-container">
            <Link to="/" className="link">
              <h1 className="logo">COVID19INDIA</h1>
            </Link>
            <button
              type="button"
              className="toggle-button"
              onClick={this.whenToggleButtonClick}
            >
              <img
                src="https://res.cloudinary.com/dh7ed1uf5/image/upload/v1703096249/add-to-queue_1_wxma8l.png"
                alt="menu"
              />
            </button>
          </div>

          <div className="menu">
            {isToggleActive ? this.showDropDownMenu() : ''}
          </div>
        </div>
      </>
    )
  }
}

export default Header
