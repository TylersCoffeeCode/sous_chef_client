import { useState } from 'react'
import Nav from '../../components/Nav'
import './Login.css'
import sous from '../../imgs/home/sousChef.png'
import LoginForm from './LoginForm'
import Register from './Register'


const Login = ({ setUser }) => {

  const [form, setForm] = useState(false)

  const toggleForm = () => {
    setForm(!form)
  }

  return (
    <div className="form-page-ctn">
      <Nav />
      <div className="form-ctn">
        <div className='form-header'>
          <img src={sous} alt="" />
        </div>
        {form ? <Register toggleForm={toggleForm} /> : <LoginForm toggleForm={toggleForm} setUser={setUser} />}
      </div>
    </div>
  )


}

export default Login