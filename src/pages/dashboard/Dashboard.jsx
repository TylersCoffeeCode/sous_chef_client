import './Dashboard.css'
import MealCard from '../../components/MealCard'
import { useState, useEffect, createContext } from 'react'
import { Link } from 'react-router-dom'
import Search from '../../components/Search'
import Client from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav'


const Dashboard = ({ user,setUser }) => {

    const [searchResults, setSearchResults] = useState([])
    const [searched, toggleSearched] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const [toggleTabs, setToggleTabs] = useState(1)

    const tabChanger = (i) => {
        setToggleTabs(i)
        
    }

    const [meal, setMeal] = useState([])
    const getMeals = async () => {
        try {
            const res = await Client.get('/meals/')
            setMeal(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const [mealCuisine, setmealCuisine] = useState([])
    const getmealCuisine = async () => {
        try {
            const res = await Client.get(`/meals/${mealCuisine}`)
            console.log(res.data);
            setmealCuisine(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getmealCuisine()
    }, [])

    useEffect(() => {
        getMeals()
    }, [])

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleLogOut = () => {
        
        setUser(null)
        
        localStorage.clear()
    }

    const createRecipe = () => {
        if (user) {
            navigate('/add/meal')
        } else navigate('/Login')
    }


    //   const newly_add = meal[meal.length - 1]

    return (
        <div className="dashboard-ctn">
            <Nav user={user} handleLogOut={handleLogOut}/>
            <div className='spacer'></div>
            <div className='top-div'>
                <div className='search-ctn'>
                    <div className='search-box'>
                        <div className='search-icon'>
                            🔎 |
                        </div>
                        <div className='search-bar'>
                            <div>
                                <Search
                                    onSubmit={() => navigate(`/results/${searchQuery}`)}
                                    value={searchQuery}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='spacer' style={{ marginBottom: "1rem" }}></div>
            <div className='spacer2' style={{ boxShadow: "#474747 0px -12px -4px ", width: "100%", height: "0.1rem" }}></div>
            <div className='trending-div-title'>Trending Now 🔥</div>
            <div className='trending-div'>
                <div className='createCardDiv'>
                    <div className='createCard'>
                        <div className='addCardText' onClick={() => createRecipe()}>
                            <h3>Create a Recipe</h3>
                            <h4>Easy to make</h4>
                            <h4>Share with everyone</h4>
                        </div>
                        <div className='addCardPlus'>
                            +
                        </div>
                    </div>
                </div>
                {meal.slice(0, 8).map((meal) => (
                    <Link to={`http://localhost:3000/meals/${meal.id}`} key={meal.id}>
                        <MealCard name={meal?.name} picture={meal?.picture} createdby={meal?.createdby}    />
                    </Link>
                ))}
            </div>
            <div className='categories'>
                <h4>Categories |</h4>
                <div className='categoriesTabs'>
                    <h5 className={toggleTabs === 1 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(1)}>American</h5>
                    <h5 className={toggleTabs === 2 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(2)}>Mexican</h5>
                    <h5 className={toggleTabs === 3 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(3)}>Tab</h5>
                    <h5 className={toggleTabs === 4 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(4)}>Tab</h5>
                    <h5 className={toggleTabs === 5 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(5)}>Tab</h5>
                    <h5 className={toggleTabs === 6 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(6)}>Tab</h5>
                    <h5 className={toggleTabs === 7 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(7)}>Tab</h5>
                </div>
            </div>
            <div className='categoryCardDiv'>

                <div className='categoryCard'>
                    <div className='categoryCardText'>
                        <p className='cuisine'>Cusine</p>
                        <h3>Oven Baked Golden Crusted Steak</h3>
                        <p>By: Tyler</p>
                    </div>
                </div>

                <div className='categoryCard'>
                    <div className='categoryCardText'>
                        <p className='cuisine'>Cusine</p>
                        <h3>Oven Baked Golden Crusted Steak</h3>
                        <p>By: Tyler</p>
                    </div>
                </div>

                <div className='categoryCard'>
                    <div className='categoryCardText'>
                        <p className='cuisine'>Cusine</p>
                        <h3>Oven Baked Golden Crusted Steak</h3>
                        <p>By: Tyler</p>
                    </div>
                </div>

                <div className='categoryCard'>
                    <div className='categoryCardText'>
                        <p className='cuisine'>Cusine</p>
                        <h3>Oven Baked Golden Crusted Steak</h3>
                        <p>By: Tyler</p>
                    </div>
                </div>

                <div className='categoryCard'>
                    <div className='categoryCardText'>
                        <p className='cuisine'>Cusine</p>
                        <h3>Oven Baked Golden Crusted Steak</h3>
                        <p>By: Tyler</p>
                    </div>
                </div>

                <div className='categoryCard'>
                    <div className='categoryCardText'>
                        <p className='cuisine'>Cusine</p>
                        <h3>Oven Baked Golden Crusted Steak</h3>
                        <p>By: Tyler</p>
                    </div>
                </div>

                <div className='categoryCard'>
                    <div className='categoryCardText'>
                        <p className='cuisine'>Cusine</p>
                        <h3>Oven Baked Golden Crusted Steak</h3>
                        <p>By: Tyler</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard