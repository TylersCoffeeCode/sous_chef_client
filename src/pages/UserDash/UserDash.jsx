import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Client from '../../services/api'
import MealCard from '../../components/MealCard'
import './UserDash.css'
import Nav from '../../components/Nav'

const UserDash = ({ user, setUser }) => {

  const author = localStorage.getItem('user_id')
  const [greet, setGreet] = useState('')
  const [userMeals, setUserMeals] = useState([])

  const GetUser = async (data) => {
    try {
      const res = await Client.get(`/users/get/${author}`, data)
      setGreet(res.data.username)
    } catch (error) {
      throw error
    }
  }

  const getUserMeals = async () => {
    try {
      const res = await Client.get(`/users/get/meals/${author}`)
      setUserMeals(res.data)
      setFlip(true)
    } catch (error) {
      throw error
    }
  }

  const handleDelete = async (id) => {
    try {
      await Client.delete(`/meals/${id}`)
      setFlip(!flip)
    } catch (error) {
      throw error
    }
  }

  const [flip, setFlip] = useState(false)

  useEffect(() => {
    GetUser()
    getUserMeals()
  }, [flip])

  return (
    <div className='meal-ctn2'>
      <Nav user={user} setUser={setUser} />
      <div className='greeting'>
        <h1>Welcome {greet} </h1>
      </div>
      <div className='bigDiv2'>
        <h3>Your Meals</h3>
        {userMeals.map((meal) => (
          <div className='meal-div-card-ctn2 ' key={meal.id}>
            <MealCard name={meal?.name} picture={meal?.picture} createdby={meal?.createdby} />
            <div className="button">
              <button onClick={() => handleDelete(meal.id)}>Delete Meal</button>
              <Link to={`/edit`} state={{ meal: meal }} >
                <button >Edit Meal</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDash
