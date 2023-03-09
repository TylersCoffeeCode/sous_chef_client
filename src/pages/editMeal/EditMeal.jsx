import { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav'
import Client from '../../services/api'


const EditMeal = () => {

  const locate = useLocation()
  const { meal } = locate.state
  console.log(meal)

  const navigate = useNavigate()

  let createdBy = localStorage.getItem('user_id')

  const initialState = {
    createdby: `${createdBy}`,
    name: `${meal.name}`,
    description: `${meal.description}`,
    cooktime: `${meal.cooktime}`,
    cuisine: `${meal.cuisine}`,
    diet: `${meal.diet}`,
    ingredients: `${meal.ingredients}`,
    mealtype: `${meal.mealtype}`,
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
    } else if (name === 'cooktime') {
      setCreateCardText((prev) => ({ ...prev, cooktime: `${value} hour(s)` }));
    } else if (name === 'diet') {
      setCreateCardText((prev) => ({ ...prev, diet: value }))
    } else if (name === 'ingredients') {
      setCreateCardText((prev) => ({ ...prev, ingredients: value }))
    } else if (name === 'mealtype') {
      setCreateCardText((prev) => ({ ...prev, mealtype: value }))
    }

    if (name === 'image') {
      if (files.length) {
        const imageUrl = URL.createObjectURL(files[0]);
        setCreateImage(imageUrl);
      }
    }

    if (name === 'description') {
      setCreateDescription((prev) => ({ ...prev, description: value }));
    }
  }

  const [createDescription, setCreateDescription] = useState({
    description: '',
  })

  const [createCardText, setCreateCardText] = useState({
    name: ``,
    cuisine: '',
    cooktime: '',
    diet: '',
    ingredients: '',
    mealtype: ''
  })

  const [createImage, setCreateImage] = useState('')


  const editMeal = async (id,data) => {
    try {
      await Client.put(`/meals/${id}`, data)
    } catch (error) {
      throw error
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    editMeal(meal.id, formValues)
    // navigate('/auth')
  }


  return (
    <div className='add-page-ctn'>
      <Nav />
      <div className='add-page-div'>
        <div className='add-column'>
          <h1>Edit Meal</h1>
          <form onSubmit={onSubmit} className='addForm'>
            <input
              name="name"
              type="text"
              placeholder="Meal Name ex. Nachos"
              defaultValue= {meal.name}
              onChange={handleChange}
              required
            />
            <input
              name="description"
              type="text"
              placeholder="Describe your food"
              defaultValue= {meal.description}
              onChange={handleChange}
              required
            />
            <input
              name="cooktime"
              type="text"
              placeholder="Number of hours ex. 1"
              defaultValue= {meal.cooktime}
              onChange={handleChange}
            />
            <input
              name="cuisine"
              type="text"
              placeholder="Cuisine ex. Mexican, Italian, etc."
              defaultValue= {meal.cuisine}
              onChange={handleChange}
            />
            <input
              name="diet"
              type="text"
              placeholder="Diet ex. Various, Vegan"
              defaultValue= {meal.diet}
              onChange={handleChange}
            />
            <input
              name="ingredients"
              type="text"
              placeholder="Ingredients ex. 250ml Egg, 1 cup water"
              defaultValue= {meal.ingredients}
              onChange={handleChange}
            />
            <input
              name="mealtype"
              type="text"
              placeholder="Breakfast? Lunch? Dinner?"
              defaultValue= {meal.mealtype}
              onChange={handleChange}
            />
            <input
              name="picture"
              type="text"
              placeholder="Insert image url here"
              defaultValue= {meal.picture}
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
                <h4 style={{ backgroundColor: '#53ddf2' }}>{createCardText.diet}</h4>
              </div>
              <p>{createCardText.cooktime}</p>
              <p>{createCardText.mealtype}</p>
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