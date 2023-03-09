import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Client from '../../services/api'
import MealCard from '../../components/MealCard'
import './UserDash.css'
import Nav from '../../components/Nav'

const UserDash = () => {

  const navigate = useNavigate()

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
    } catch (error) {
      throw error
    }
  }

  const handleDelete = async (id) => {
    try {
      await Client.delete(`/meals/${id}`)
    } catch (error) {
      throw error
    }
  }






  useEffect(() => {
    GetUser()
    getUserMeals()
  }, [author])



  return (
    <div className='meal-ctn2'>
      <Nav />
      <div className='greeting'>
      <h1>Welcome {greet} </h1>
      </div>
      <div className='bigDiv2'>
        <h3>Your Meals</h3>
        {userMeals.map((meal) => (
          <div className='meal-div-card-ctn2 ' key={meal.id}>
            {/* <div className='meal-div'> */}
              <MealCard name={meal?.name} picture={meal?.picture} createdby={meal?.createdby} />
              <div className="button">
              <button onClick={() => handleDelete(meal.id)}>Delete Meal</button>
              <Link to={`/edit`} state={{ meal: meal }} >
                <button >Edit Meal</button>
              </Link>
              </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDash
