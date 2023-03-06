import { useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"



const Results = () => {

  const {query} = useParams()

  const [searchResults , setSearchResults] = useState

  const getSearchResults = async () => {
    const response = await axios.get(`/search/${query}`)
    setSearchResults(response.data)
    console.log(searchResults)
  }

  return (
    <div>Results</div>
  )
}
export default Results