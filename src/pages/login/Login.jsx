import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav'
import './Login.css'
import sous from '../../imgs/home/sousChef.png'


const Login = () => {


  let navigate = useNavigate()
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   await RegisterUser({
  //     name: formValues.name,
  //     email: formValues.email,
  //     password: formValues.password
  //   })
  //   setFormValues(initialState)
  //   navigate('/signin')
  // }

  return (
    <div className="form-page-ctn">
      <Nav />
      <div className="form-ctn">
        <div className='form-header'>
          <img src={sous} alt="" />
        </div>
        <form className="col" onSubmit={''}>
          <div className='header'>
            <h1>Log in</h1>
          </div>
          <div className="input-wrapper-login">
            <label htmlFor="email"></label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper-login">
            <label htmlFor="password"></label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              placeholder="Enter password"
              required
            />
          </div>
          <div className='checkBoxDiv'>
          <input type="checkbox" name="" className='checkBox'/>
          <label htmlFor="checkbox"> Remember me</label>
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }>
            Sign In
          </button>
          <div className='createFormText'>
            <p className='pCreate'>Not a user? <a>Sign up now</a></p> 
          </div>
        </form>
      </div>
    </div>
  )


}

export default Login