import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Register = ({ toggleForm }) => {

    const RegisterUser = async (data) => {
        try {
            console.log(data)
            const res = await axios.post('http://localhost:3001/users/register', data)
            return res.data
        } catch (error) {
            throw error
        }
    }

    let navigate = useNavigate()

    const initialState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formValues, setFormValues] = useState(initialState)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setFormValues(initialState)
        console.log('hi');
        RegisterUser(formValues)
        navigate('/login')
  }


    return (
        <form className="col" onSubmit={onSubmit}>
            <div className='header'>
                <h1>Create Account</h1>
            </div>
            <div className="input-wrapper-create">
                <label htmlFor="username"></label>
                <input
                    onChange={handleChange}
                    name="username"
                    type="text"
                    placeholder="Create Username"
                    defaultValue={formValues.username}
                    required
                />
            </div>
            <div className="input-wrapper-create">
                <label htmlFor="password"></label>
                <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    defaultValue={formValues.email}
                    placeholder="Enter Email"
                    required
                />
            </div>
            <div className="input-wrapper-create">
                <label htmlFor="password"></label>
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    defaultValue={formValues.password}
                    placeholder="Create password"
                    required
                />
            </div>
            <div className="input-wrapper-create">
                <label htmlFor="password"></label>
                <input
                    onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                    defaultValue={formValues.confirmPassword}
                    placeholder="Confirm password"
                    required
                />
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
                <p className='pCreate'>Already a user? <a onClick={() => toggleForm()}>Sign in</a></p>
            </div>
        </form>
    )
}
export default Register