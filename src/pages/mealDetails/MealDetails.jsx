import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



const MealDetails = ({meal}) => {
    let { id } = useParams()
    const [mealDetails, setMealDetails] = useState({})
    const navigate = useNavigate()

    // const mealInfo = meal.find((meal) => meal.id === id)
    const getMealDetail = async () => {
        try {
          const res = await axios.get(`http://localhost:3001/meals/${ id }`)
          setMealDetails(res.data)
          console.log(res.data);
        } catch (err) {
          console.log(err)
        }
      }


    useEffect(() => {
        getMealDetail()
      }, [meal])


      const handleChange = (e) => {
        setMealDetails({ ...mealDetails, [e.target.id]: e.target.value })
      }


  return (
    <div>name: {mealDetails.meal.name}</div>
  )
}
export default MealDetails