import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"
import axios from "axios"
import Search from "../../components/Search"



const Results = () => {

  const {query} = useParams()

  const [searchResults , setSearchResults] = useState([])

  const getSearchResults = async () => {
    const response = await axios.get(`http://localhost:3001/meals/search/${query}`)
    setSearchResults(response.data.meal)
  }

  useEffect(() => {
    getSearchResults()
}, [query])


  return (
    <div>{searchResults.map((searched) => (
        <div key={searched.id}>
            {searched.name}
        </div>
    ))}</div>
    // <div></div>
  )
}
export default Results