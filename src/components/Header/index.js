import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <>
      <ul className="headers-d-flex">
        <li>
          <Link className="link" to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            <p>About</p>
          </Link>
        </li>
      </ul>
    </>
  )
}
export default Header
