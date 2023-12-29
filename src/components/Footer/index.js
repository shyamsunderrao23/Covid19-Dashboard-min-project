import './index.css'
import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => (
  <>
    <div className="footer-container">
      <h1 className="footer-covid19-heading">
        COVID19<span className="footer-sub-heading">INDIA</span>
      </h1>
      <p className="footer-description">
        we stand with everyone fighting on the front lines
      </p>
      <ul className="footer-social-media-list">
        <li className="social-media-list">
          <VscGithubAlt className="github" />
          <FiInstagram className="instagram" />
          <FaTwitter className="twitter" />
        </li>
      </ul>
    </div>
  </>
)

export default Footer
