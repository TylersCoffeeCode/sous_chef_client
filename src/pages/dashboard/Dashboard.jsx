import './Dashboard.css'
import MealCard from '../../components/MealCard'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from '../../components/Search'
import axios from 'axios'

const Dashboard = () => {

    const [searchResults, setSearchResults] = useState([])
    const [searched, toggleSearched] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const getSearchResults = async (e) => {
        e.preventDefault()
        const res = await axios.get(`http://localhost:3001/meals/${searchQuery}`)
        setSearchResults(res.data)
        toggleSearched(true)
        setSearchQuery('')
      }


      const [meal, setMeal] = useState([])
      const getMeals = async () => {
        try {
          const res = await axios.get('http://localhost:3001/meals/')
          setMeal(res.data)
        } catch (err) {
          console.log(err)
        }
      }
    
      useEffect(() => {
        getMeals()
      }, [])

      const handleChange = (event) => {
        setSearchQuery(event.target.value)
      }

    //   const newly_add = meal[meal.length - 1]

    return (
        <div className="dashboard-ctn">
            <div className='top-div'>
                <div className='search-ctn'>
                    <div className='search-box'>
                        <div className='search-icon'>
                            icon |
                        </div>
                        <div className='search-bar'>
                        <div>
                            <Search
                            onSubmit={getSearchResults}
                            value={searchQuery}
                            onChange={handleChange}
                            />
                        </div>
                        {searched && (
                        <div>
                            <h2>Search Results</h2>
                            <section className="container-grid">
                                {searchResults.map((result) => (
                                <Link to={`/${result._id}`} key={result._id}>
                                <MealCard name={result.name} image={result.image} />
                                </Link>
                                ))}
                            </section>
                        </div>
                        )}
                            {/* Search For Recipes */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='trending-div-title'>Trending Now 🔥</div>
            <div className='trending-div'>
                <div className='createCardDiv'>
                    <div className='createCard'>
                    <div className='addCardText'>
                        <h3>Create a Recipe</h3>
                        <h4>Easy to make</h4>
                        <h4>Share with everyone</h4>
                    </div>
                    <div className='addCardPlus'>
                        +
                    </div>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                    <div className='trendingFoodCardImg'>
                        <img src="" alt="" />
                    </div>
                    <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                    <div className='trendingFoodCardImg'>
                        <img src="" alt="" />
                    </div>
                    <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                    <div className='trendingFoodCardImg'>
                        <img src="" alt="" />
                    </div>
                    <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                </div>
                <div className='trendingFoodCard'>
                    <div className='trendingFoodCardImg'>
                        <img src="" alt="" />
                    </div>
                    <div className='trendingFoodCardText'>
                        <h5>Sandwich</h5>
                        <p>By: Tyler</p>
                    </div>
                    <MealCard name={meal[0].name} image={meal[0].picture} />
                </div>
            </div>
            <div className='categories'>
                <h4>Categories</h4>
            </div>
            <div className='categoryCardDiv'>
                <div className='categoryCard'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                </div>
                <div className='categoryCard'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                </div>
                <div className='categoryCard'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                </div>
                <div className='categoryCard'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                </div>
                <div className='categoryCard'>
                    <h3>Steak</h3>
                    <p>By: Tyler</p>
                </div>
            </div>
        </div>
    )
}
export default Dashboard