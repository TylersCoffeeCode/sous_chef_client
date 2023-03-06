import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav className='links'>
        <div>
          <Link to="/dashboard" className="inactive" activeclassname="active">Home</Link>
          <Link to="/Favorites" className="inactive" activeclassname="active">Favorites</Link>
          <Link to="/About" className="inactive" activeclassname="active">About</Link>
          <Link to="/Login" className="inactive" activeclassname="active">Login</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav