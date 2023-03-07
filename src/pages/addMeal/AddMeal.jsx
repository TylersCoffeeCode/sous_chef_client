import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddMeal = () => {
  
  const initialState = {
    name: '',
    description: '',
    cooktime: '',
    cuisine: '',
    diet: '',
    ingredients: '',
    mealtype: ''
  }
  
  const [formValues, setFormValues] = useState(initialState)
  
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }



  return (
    <div>
    <div>
      <h1>AddMeal</h1>
      <form>
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
        />
        <label htmlFor="ingredients">Ingredients</label>
        <input 
          name="ingredients"
          type="text"
          placeholder=""
          onChange={handleChange}
        />
        <label htmlFor="mealtype">Memealtype</label>
        <input 
          name="mealtype"
          type="text"
          placeholder="Breakfast? Lunch?"
          onChange={handleChange}
        />

      </form>
      
      </div>
    </div>
  )
}
export default AddMeal