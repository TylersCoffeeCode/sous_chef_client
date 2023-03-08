import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AddMeal.css'
import Nav from '../../components/Nav'

const AddMeal = () => {

  const navigate = useNavigate()

  const initialState = {
    createdby: '15',
    name: '',
    description: '',
    cooktime: '',
    cuisine: '',
    diet: '',
    ingredients: '',
    mealtype: '',
    image: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const addMeal = async (data) => {
    try {
      const res = await axios.post('http://localhost:3001/meals/create', data)
      navigate('/dashboard')
      return res.data
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addMeal(formValues)
    setFormValues(initialState)
  }


  return (
    <div className='add-page-ctn'>
      <Nav />
      <div className='add-page-div'>
        <h1>AddMeal</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name*</label>
          <input
            name="name"
            type="text"
            placeholder="Meal Name ex. Nachos"
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Description*</label>
          <input
            name="description"
            type="text"
            placeholder="Describe your food"
            onChange={handleChange}
            required
          />
          <label htmlFor="cooktime">Cook Time</label>
          <input
            name="cooktime"
            type="text"
            placeholder="in hours ex. 1"
            onChange={handleChange}
          />
          <label htmlFor="cuisine">Cuisine</label>
          <input
            name="cuisine"
            type="text"
            placeholder="Mexican, Italian, etc."
            onChange={handleChange}
          />
          <label htmlFor="diet">Diet Type</label>
          <input
            name="diet"
            type="text"
            placeholder=""
            onChange={handleChange}
          />
          <label htmlFor="ingredients">Ingredients</label>
          <input
            name="ingredients"
            type="text"
            placeholder=""
            onChange={handleChange}
          />
          <label htmlFor="mealtype">Meal type</label>
          <input
            name="mealtype"
            type="text"
            placeholder="Breakfast? Lunch?"
            onChange={handleChange}
          />
          <label htmlFor="image">Image Url</label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>

      </div>
    </div>
  )
}
export default AddMeal