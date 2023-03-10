import './Dashboard.css'
import MealCard from '../../components/MealCard'
import { useState, useEffect, createContext } from 'react'
import { Link } from 'react-router-dom'
import Search from '../../components/Search'
import Client from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav'
import CategoryCard from '../../components/CategoryCard'


const Dashboard = ({ user, setUser }) => {

    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const [toggleTabs, setToggleTabs] = useState(1)

    const tabChanger = (i, x) => {
        setToggleTabs(i)
        getmealCuisine(x)
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
    const getmealCuisine = async (x) => {
        try {
            const res = await Client.get(`/meals/type/${x}`)
            setmealCuisine(res.data.meal)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getmealCuisine(toggleTabs === 1 ? "American" : toggleTabs === 2 ? "Mexican" : toggleTabs === 3 ? "Italian" : toggleTabs === 4 ? "Asian" : toggleTabs === 5 ? "Greek" : toggleTabs === 6 ? "Brazilian" : toggleTabs === 7 ? "African" : "")
    }, [toggleTabs])

    useEffect(() => {
        getMeals()
        getmealCuisine("American")
    }, [])

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const createRecipe = () => {
        if (user) {
            navigate('/add/meal')
        } else navigate('/Login')
    }

    return (
        <div className="dashboard-ctn">
            <Nav user={user} setUser={setUser} />
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
                    <div className='createCard' onClick={() => createRecipe()}>
                        <div className='addCardText' >
                            <h3>Create a Recipe</h3>
                            <h4>Easy to make</h4>
                            <h4>Share with everyone</h4>
                        </div>
                        <div className='addCardPlus'>
                            +
                        </div>
                    </div>
                </div>
                {meal.slice(-8).reverse().map((meal) => (
                    <Link to={`/meals/${meal.id}`} key={meal.id}>
                        <MealCard name={meal?.name} picture={meal?.picture} createdby={meal?.createdby} />
                    </Link>
                ))}
            </div>
            <div className='categories'>
                <h4>Categories |</h4>
                <div className='categoriesTabs'>
                    <h5 className={toggleTabs === 1 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(1, 'American')}>American</h5>
                    <h5 className={toggleTabs === 2 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(2, 'Mexican')}>Mexican</h5>
                    <h5 className={toggleTabs === 3 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(3, 'Italian')}>Italian</h5>
                    <h5 className={toggleTabs === 4 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(4, 'Asian')}>Asian</h5>
                    <h5 className={toggleTabs === 5 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(5, 'Greek')}>Greek</h5>
                    <h5 className={toggleTabs === 6 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(6, 'Brazilian')}>Brazilian</h5>
                    <h5 className={toggleTabs === 7 ? "cuisineTabs activeCuisineTab" : "cuisineTabs"} onClick={() => tabChanger(7, 'African')}>African</h5>
                </div>
            </div>
            <div className='categoryCardDiv'>

                {mealCuisine.map((card) => (
                    <Link to={`/meals/${card.id}`} key={card.id}>
                        <CategoryCard name={card?.name} picture={card?.picture} createdby={card?.createdby} cuisine={card?.cuisine} diet_type={card?.diet_type} />
                    </Link>

                ))}
            </div>
        </div>
    )
}
export default Dashboard