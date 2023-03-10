import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Client from '../../services/api'
import Search from "../../components/Search"
import './Results.css'
import Nav from '../../components/Nav'
import sous from '../../imgs/home/sousChef.png'
import { Link } from 'react-router-dom'

const Results = ({ user, setUser }) => {

  const navigate = useNavigate()
  const { query } = useParams()

  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async () => {
    const response = await Client.get(`/meals/search/${query}`)
    setSearchResults(response.data.meal)
  }

  useEffect(() => {
    getSearchResults()
  }, [query])


  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="result-ctn">
      <Nav user={user} setUser={setUser} />
      <div className="searchCtn">
        <div className="searchTitle">
          <h2>Unleash your inner chef with our recipe search feature</h2>
        </div>
        <div className="searchBar">
          <Search
            onSubmit={() => navigate(`/results/${searchQuery}`)}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="resultsLogo">
        <img src={sous} alt="" />
      </div>
      <div className="resultsCtn">
        <div className="resultsTitle">
          Results for : {query}
        </div>
        <div className="resultsCards">
          {searchResults.map((searched) => (
            <Link to={`/meals/${searched.id}`} key={searched.id}>
              <div className='resultCard' key={searched.id}>
                <img src={searched.picture} alt="food" />
                <div className='categoryCardText'>
                  <p className='cuisine'>{searched.cuisine}</p>
                  <p className='mealType'>{searched.meal_type}</p>
                  <p className='dietType'>{searched.diet_type}</p>
                  <h3>{searched.name}</h3>
                  <p>{searched.ingredients}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Results