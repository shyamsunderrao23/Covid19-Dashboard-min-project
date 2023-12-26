import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  state = {
    showMenu: false,
  }

  onClickHamburgerBtn = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  onClickCloseBtn = () => {
    this.setState({showMenu: false})
  }

  render() {
    const {showMenu} = this.state

    return (
      <>
        <nav className="header-bg-color">
          <Link to="/" className="link">
            <h1 className="covid19-heading">
              COVID19 <span className="india-heading">INDIA</span>
            </h1>
          </Link>
          <ul className="ul-items-list">
            <li className="li-items-list">
              <Link to="/" className="link">
                <p className="home-heading">Home</p>
              </Link>
              <Link to="/about" className="link">
                <p className="about-heading">About</p>
              </Link>
            </li>
          </ul>

          <div className="hamburger-nav-items">
            <button
              type="button"
              className="menu-btn"
              onClick={this.onClickHamburgerBtn}
            >
              <img
                src="https://res.cloudinary.com/dh7ed1uf5/image/upload/v1703096249/add-to-queue_1_wxma8l.png"
                alt="menu item"
                className="menu-img"
              />
            </button>
          </div>
        </nav>
        {showMenu ? (
          <ul className="hamburger-ul-menu-list">
            <li className="hamburger-li-menu-list">
              <Link to="/" className="link">
                <p className="hamburger-home-heading">Home</p>
              </Link>
              <Link to="/about" className="link">
                <p className="hamburger-about-heading">About</p>
              </Link>
            </li>
            <li className="close-li">
              <button
                className="close-btn"
                type="button"
                onClick={this.onClickCloseBtn}
              >
                <img
                  src="https://res.cloudinary.com/dh7ed1uf5/image/upload/v1703098259/Solid_gwyfan.png"
                  alt="close icon"
                  className="close-icon"
                />
              </button>
            </li>
          </ul>
        ) : null}
      </>
    )
  }
}

export default Header
