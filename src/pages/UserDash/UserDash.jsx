import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import MealCard from '../../components/MealCard'
import { Link } from 'react-router-dom'

const UserDash = () => {


  const author = localStorage.getItem('user_id')
  const [greet, setGreet] = useState('')
  const [userMeals, setUserMeals] = useState([])

  const GetUser = async (data) => {
    try {
      const res = await axios.get(`http://localhost:3001/users/get/${author}`, data)
      setGreet(res.data.username)
    } catch (error) {
      throw error
    }
  }

  const getUserMeals = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users/get/meals/${author}`)
      setUserMeals(res.data)
    } catch (error) {
      throw error
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/meals/${id}`)
    } catch (error) {
      throw error
    }
  }

  const handleEdit = async (id) => {
    try {
      await axios.put(`http://localhost:3001/meals/${id}`)
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
            <MealCard name={meal?.name} picture={meal?.picture} createdby={meal?.createdby} />
            <button onClick={() => handleDelete(meal.id)}>Delete Meal</button>
            <button onClick={()=> handleEdit(meal.id)}>Edit Meal</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDash
