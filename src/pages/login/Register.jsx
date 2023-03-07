import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Register = ({toggleForm}) => {



    let navigate = useNavigate()
    const initialState = {
        name: '',
        user: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formValues, setFormValues] = useState(initialState)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const onSubmit = () => {
        console.log('hi');
    }



    return (
        <form className="col" onSubmit={onSubmit}>
            <div className='header'>
                <h1>Create Account</h1>
            </div>
            <div className="input-wrapper-create">
                <label htmlFor="user"></label>
                <input
                    onChange={handleChange}
                    name="user"
                    type="user"
                    placeholder="Create Username"
                    value={formValues.user}
                    required
                />
            </div>
            <div className="input-wrapper-create">
                <label htmlFor="password"></label>
                <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={formValues.email}
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
                    value={formValues.password}
                    placeholder="Create password"
                    required
                />
            </div>
            <div className="input-wrapper-create">
                <label htmlFor="password"></label>
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={formValues.confirmPassword}
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