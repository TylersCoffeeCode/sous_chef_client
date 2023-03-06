import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



const MealDetails = ({meal}) => {
    let { id } = useParams()
    const [mealDetails, setMealDetails] = useState({})

    const getMealDetail = async () => {
        try {
          const res = await axios.get(`http://localhost:3001/meals/${ id }`)
          setMealDetails(res.data.meal)
          console.log(res.data.meal);
        } catch (err) {
          console.log(err)
        }
      }

    useEffect(() => {
        getMealDetail()
      }, [meal])

  return (
    <div>name: {mealDetails.name}</div>
  )
}
export default MealDetails