import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav'
import Client from '../../services/api'


const EditMeal = ({ user, setUser }) => {

  const locate = useLocation()
  const { meal } = locate.state
  console.log(meal)

  const navigate = useNavigate()

  let createdBy = localStorage.getItem('user_id')

  const initialState = {
    createdby: `${createdBy}`,
    name: `${meal.name}`,
    description: `${meal.description}`,
    cook_time: `${meal.cook_time}`,
    cuisine: `${meal.cuisine}`,
    diet_type: `${meal.diet_type}`,
    ingredients: `${meal.ingredients}`,
    meal_type: `${meal.meal_type}`,
    image: `${meal.picture}`
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === 'name') {
      setCreateCardText((prev) => ({ ...prev, title: value }));
    } else if (name === 'cuisine') {
      setCreateCardText((prev) => ({ ...prev, cuisine: value }));
    } else if (name === 'cook_time') {
      setCreateCardText((prev) => ({ ...prev, cook_time: `${value} hour(s)` }));
    } else if (name === 'diet_type') {
      setCreateCardText((prev) => ({ ...prev, diet_type: value }))
    } else if (name === 'ingredients') {
      setCreateCardText((prev) => ({ ...prev, ingredients: value }))
    } else if (name === 'meal_type') {
      setCreateCardText((prev) => ({ ...prev, meal_type: value }))
    }

    if (name === 'picture') {
      setCreateImage(value);
    }


    if (name === 'description') {
      setCreateDescription((prev) => ({ ...prev, description: value }));
    }
  }

  const [createDescription, setCreateDescription] = useState({
    description: `${meal.description}`,
  })

  const [createCardText, setCreateCardText] = useState({
    createdby: `${createdBy}`,
    name: `${meal.name}`,
    cook_time: `${meal.cook_time}`,
    cuisine: `${meal.cuisine}`,
    diet_type: `${meal.diet_type}`,
    ingredients: `${meal.ingredients}`,
    meal_type: `${meal.meal_type}`,
  })

  const [createImage, setCreateImage] = useState(meal.picture)

  const editMeal = async (id, data) => {
    try {
      await Client.put(`/meals/${id}`, data)
    } catch (error) {
      throw error
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    editMeal(meal.id, formValues)
    navigate('/auth')
  }


  return (
    <div className='add-page-ctn'>
      <Nav user={user} setUser={setUser} />
      <div className='add-page-div'>
        <div className='add-column'>
          <h1>Edit Meal</h1>
          <form onSubmit={onSubmit} className='addForm'>
            <input
              name="name"
              type="text"
              placeholder="Meal Name ex. Nachos"
              defaultValue={meal.name}
              onChange={handleChange}
              required
            />
            <input
              name="description"
              type="text"
              placeholder="Describe your food"
              defaultValue={meal.description}
              onChange={handleChange}
              required
            />
            <input
              name="cook_time"
              type="text"
              placeholder="Number of hours ex. 1"
              defaultValue={meal.cook_time}
              onChange={handleChange}
            />
            <input
              name="cuisine"
              type="text"
              placeholder="Cuisine ex. Mexican, Italian, etc."
              defaultValue={meal.cuisine}
              onChange={handleChange}
            />
            <input
              name="diet_type"
              type="text"
              placeholder="Diet ex. Various, Vegan"
              defaultValue={meal.diet_type}
              onChange={handleChange}
            />
            <input
              name="ingredients"
              type="text"
              placeholder="Ingredients ex. 250ml Egg, 1 cup water"
              defaultValue={meal.ingredients}
              onChange={handleChange}
            />
            <input
              name="meal_type"
              type="text"
              placeholder="Breakfast? Lunch? Dinner?"
              defaultValue={meal.meal_type}
              onChange={handleChange}
            />
            <input
              name="picture"
              type="text"
              placeholder="Insert image url here"
              defaultValue={meal.picture}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className='pageCreateCtn'>
          <div className='pageTitle'>
            Card Showcase
          </div>
          <div className='creatingCardDiv'>
            <div className='cardImage'>
              <img src={createImage} alt="" />
            </div>
            <div className='createCardText'>
              <h3>{createCardText.title}</h3>
              <div className='createCategory'>
                <h4>{createCardText.cuisine}</h4>
                <h4 style={{ backgroundColor: '#53ddf2' }}>{createCardText.diet_type}</h4>
              </div>
              <p>{createCardText.cook_time}</p>
              <p>{createCardText.meal_type}</p>
              <p>{createCardText.ingredients}</p>
            </div>
          </div>
          <div className='createDescription'>
            <h3>Description</h3>
            <p>{createDescription.description}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
export default EditMeal