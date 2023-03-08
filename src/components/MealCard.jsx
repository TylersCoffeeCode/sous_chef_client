import '../pages/dashboard/Dashboard.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


const MealCard = (props) => {

  const author = props.createdby
  const [userName, setUserName] = useState('')

  const GetUser = async (data) => {
    try {
      const res = await axios.get(`http://localhost:3001/users/get/${author}`, data)
      setUserName(res.data.username)
    } catch (error) {
      throw error
    }
  }




  useEffect(() => {
    GetUser()
  }, [author])


  return (
    <div className="trendingFoodCard" onClick={props.onClick}>
      <div className="trendingFoodCardImg">
        <img src={props.picture} alt="meal-picture" />
      </div>
      <div className="trendingFoodCardText">
        <h5>{props.name}</h5>
        <p>By: {userName}</p>
        {/* <h2>{props.cuisine}</h2> */}
      </div>
    </div>
  )
}

export default MealCard