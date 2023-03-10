import { useParams, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './MealDetails.css'
import Nav from '../../components/Nav'
import { Link } from 'react-router-dom'
import Comments from '../../components/Comments'
import Client from '../../services/api'


const MealDetails = ({ meal }) => {
  let { id } = useParams()
  const [mealDetails, setMealDetails] = useState({})

  const [toggleTabs, setToggleTabs] = useState(1)

  const tabChanger = (i) => {
    setToggleTabs(i)
  }

  const getMealDetail = async () => {
    try {
      const res = await Client.get(`/meals/${id}`)
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
    <div className='mealDetailsCtn'>
      <Nav />
      <div className='mealDetailsLeft'>
          <img src={mealDetails.picture} alt="" />
      </div>
      <div className='mealDetailsRight'>
        <div className='backBtn'>
          <Link to={'/dashboard'} className='backLink'><p>Back</p></Link>
        </div>
        <div className='mealNameDesc'>
          <h1>{mealDetails.name}</h1>
          <h2>{mealDetails.description}</h2>
        </div>
        <div className='mealTabCnt'>
          <div className={toggleTabs === 1 ? "mealTabs activeTab" : "mealTabs"} onClick={() => tabChanger(1)}>
            <h3>Time</h3>
          </div>
          <div className={toggleTabs === 2 ? "mealTabs activeTab" : "mealTabs"} onClick={() => tabChanger(2)}>
            <h3>Ingredients</h3>
          </div>
          <div className={toggleTabs === 3 ? "mealTabs activeTab" : "mealTabs"} onClick={() => tabChanger(3)}>
            <h3>Recipe</h3>
          </div>
          <div className='mealTabTextCtn'>
              <div className={toggleTabs === 1 ? "mealTabText activeText" : "mealTabText"}>
                <p>{mealDetails.cook_time} hour&#40;s&#41;</p>
              </div>
              <div className={toggleTabs === 2 ? "mealTabText activeText" : "mealTabText"}>
                <p>{mealDetails.ingredients}</p>
              </div>
              <div className={toggleTabs === 3 ? "mealTabText activeText" : "mealTabText"}>
                <p></p>
              </div>
          </div>
        </div>
      </div>
      <Comments meal_id={id} />
    </div>
  )
}
export default MealDetails