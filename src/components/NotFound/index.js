import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dh7ed1uf5/image/upload/v1703186079/add-to-queue_2_lkmzxs.png"
      alt="not-found-pic"
      className="not-found-image"
    />
    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="not-found-description">
      we’re sorry, the page you requested could not be found Please go back to
    </p>
    <Link to="/" className="link">
      <button type="button" className="home-btn">
        Home
      </button>
    </Link>
  </div>
)

export default NotFound
