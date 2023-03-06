import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './components/Nav'
import About from './pages/about/About'
import MealDetails from './pages/mealDetails/MealDetails'
import AddMeal from './pages/addMeal/AddMeal'


function App() {


  const [meal, setMeal] = useState([])
  const getMeals = async () => {
    try {
      const res = await axios.get('/')
      setMeal(res.data.meals)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMeals()
  }, [])


  return (
    <div className="App">
      <header>
        {/* <Nav /> */}
      </header>

      {/* HELLO WORKING PAGE */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route
            path="meals/details/:id"
            element={
              <MealDetails meal={meal} getMeals={getMeals} />
            }
          />
        <Route path="add/meal" element={<AddMeal getMeals={getMeals} />} />
      </Routes>


    </div>
  );
}

export default App;
