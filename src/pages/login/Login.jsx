import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav'
import './Login.css'
import sous from '../../imgs/home/sousChef.png'
import LoginForm from './LoginForm'
import Register from './Register'


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

  const [form,setForm] = useState(false)

  const  toggleForm = () => {
    setForm(!form)
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
        {form ? <Register toggleForm={toggleForm}/> : <LoginForm toggleForm={toggleForm}/>}
      </div>
    </div>
  )


}

export default Login