import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AddMeal.css'
import Nav from '../../components/Nav'

const AddMeal = () => {

  const navigate = useNavigate()

  let createdBy = localStorage.getItem('user_id')

  const initialState = {
    createdby: `${createdBy}`,
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
    title: '',
    cuisine: '',
    cooktime: '',
    diet: '',
    ingredients: '',
    mealtype: ''
  })

  const [createImage, setCreateImage] = useState('')




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
        <div className='add-column'>
          <h1>AddMeal</h1>
          <form onSubmit={onSubmit} className='addForm'>
            {/* <label htmlFor="name">Name*</label> */}
            <input
              name="name"
              type="text"
              placeholder="Meal Name ex. Nachos"
              onChange={handleChange}
              required
            />
            {/* <label htmlFor="description">Description*</label> */}
            <input
              name="description"
              type="text"
              placeholder="Describe your food"
              onChange={handleChange}
              required
            />
            {/* <label htmlFor="cooktime">Cook Time</label> */}
            <input
              name="cooktime"
              type="number"
              placeholder="Number of hours ex. 1"
              onChange={handleChange}
            />
            {/* <label htmlFor="cuisine">Cuisine</label> */}
            <input
              name="cuisine"
              type="text"
              placeholder="Cuisine ex. Mexican, Italian, etc."
              onChange={handleChange}
            />
            {/* <label htmlFor="diet">Diet Type</label> */}
            <input
              name="diet"
              type="text"
              placeholder="Diet ex. Various, Vegan"
              onChange={handleChange}
            />
            {/* <label htmlFor="ingredients">Ingredients</label> */}
            <input
              name="ingredients"
              type="text"
              placeholder="Ingredients ex. 250ml Egg, 1 cup water"
              onChange={handleChange}
            />
            {/* <label htmlFor="mealtype">Meal type</label> */}
            <input
              name="mealtype"
              type="text"
              placeholder="Breakfast? Lunch? Dinner?"
              onChange={handleChange}
            />
            {/* <label htmlFor="image">Image Url</label> */}
            <input
              name="image"
              type="file"
              accept='image/*'
              placeholder="Insert image here"
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
export default AddMeal