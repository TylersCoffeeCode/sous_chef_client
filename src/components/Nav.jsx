import { Link, useNavigate } from 'react-router-dom'
import sous from '../imgs/home/sousChef.png'

const Nav = ({ user, setUser }) => {

  const navigate = useNavigate()

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/Login')
  }
  
  return (
    <nav className='links'>
      <div className='logo'>
        <img src={sous} alt="" />
        <h3 className='link-title'>Sous Chef</h3>
      </div>
      <div className='nav-list'>
        <Link to="/dashboard" className="inactive" activeclassname="active">Home</Link>
        {user ? <Link to="/auth" className="inactive" activeclassname="active">My Meals</Link>
          : <Link to="/Login" className="inactive" activeclassname="active">My Meals</Link>
        }
        <Link to="/About" className="inactive" activeclassname="active">About</Link>
        {user ? <a style={{ cursor: "pointer" }} className="inactive" activeclassname="active" onClick={() => handleLogOut()}>Logout</a>
          : <Link to="/Login" className="inactive" activeclassname="active">Login</Link>
        }
      </div>
    </nav>
  )
}

export default Nav