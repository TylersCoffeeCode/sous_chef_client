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
import Results from './pages/results/Results'


function App() {


  const [meal, setMeal] = useState([])
  const getMeals = async () => {
    try {
      const res = await axios.get('http://localhost:3001/meals/')
      setMeal(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMeals()
  }, [])


  return (
    <div className="App">
        

      {/* HELLO WORKING PAGE */}
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path='/results' element={<Results/>} />
          <Route
            path="/meals/:id"
            element={
              <MealDetails meal={meal} getMeals={getMeals} />
            }
          />
        <Route path="/add/meal" element={<AddMeal getMeals={getMeals} />} />
      </Routes>


    </div>
  );
}

export default App;
