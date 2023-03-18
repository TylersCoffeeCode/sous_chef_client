import { Link, useNavigate } from 'react-router-dom'
import sous from '../imgs/home/sousChef.png'
import { bubble as Menu } from 'react-burger-menu';

const Nav = ({ user, setUser }) => {

  const navigate = useNavigate()

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/Login')
  }

  return (
    <div style={{ width: '100%' }}>
      <nav className='links'>

        <div className='logo' onClick={() => navigate('/dashboard')}>
          <img src={sous} alt="" />
          <h3 className='link-title'>Sous Chef</h3>
        </div>
        <Menu right>
          <Link to="/dashboard" className="inactive" activeclassname="active">Home</Link>
          {user ? <Link to="/auth" className="inactive" activeclassname="active">My Meals</Link>
            : <Link to="/Login" className="inactive" activeclassname="active">My Meals</Link>
          }
          <Link to="/About" className="inactive" activeclassname="active">About</Link>
          {user ? <a style={{ cursor: "pointer" }} className="inactive" activeclassname="active" onClick={() => handleLogOut()}>Logout</a>
            : <Link to="/Login" className="inactive" activeclassname="active">Login</Link>
          }
        </Menu>
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


    </div>
  )
}

export default Nav