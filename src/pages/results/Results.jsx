import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Client from '../../services/api'
import Search from "../../components/Search"
import './Results.css'
import Nav from '../../components/Nav'
import sous from '../../imgs/home/sousChef.png'



const Results = () => {

  const { query } = useParams()

  const [searchResults, setSearchResults] = useState([])

  const getSearchResults = async () => {
    const response = await Client.get(`/meals/search/${query}`)
    setSearchResults(response.data.meal)
    console.log(response);
  }

  useEffect(() => {
    getSearchResults()
  }, [query])


  return (
    <div className="result-ctn">
      <Nav />
      <div className="searchCtn">
        <div className="searchTitle">
          <h2>Unleash your inner chef with our recipe search feature</h2>
        </div>
        <div className="searchBar">
          <Search />
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
          ))}
        </div>
      </div>
    </div>
  )
}
export default Results