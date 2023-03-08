import { Link } from 'react-router-dom'
import sous from '../imgs/home/sousChef.png'

const Nav = () => {

  return (
    <nav className='links'>
      <div className='logo'>
        <img src={sous} alt="" />
        <h3 className='link-title'>Sous Chef</h3>
      </div>
      <div className='nav-list'>
        <Link to="/dashboard" className="inactive" activeclassname="active">Home</Link>
        <Link to="/favorites" className="inactive" activeclassname="active">Favorites</Link>
        <Link to="/About" className="inactive" activeclassname="active">About</Link>
        <Link to="/Login" className="inactive" activeclassname="active">Login</Link>
      </div>
    </nav>
  )
}

export default Nav