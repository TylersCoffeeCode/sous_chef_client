import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Client from '../../services/api'
import MealCard from '../../components/MealCard'


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
    <div>
      <h1>Welcome {greet} </h1>
      <div>
        <h3>Your Meals</h3>
        {userMeals.map((meal) => (
          <div key={meal.id}>
            {console.log(meal)}
            <MealCard name={meal?.name} picture={meal?.picture} createdby={meal?.createdby} />
            <button onClick={() => handleDelete(meal.id)}>Delete Meal</button>
            <Link to={`/edit`} state={{meal: meal}} >
            <button >Edit Meal</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDash
