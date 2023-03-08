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
import Login from './pages/login/Login'


function App() {

  const [user, setUser] = useState(null)

  const [meal, setMeal] = useState([])
  const getMeals = async () => {
    try {
      const res = await axios.get('http://localhost:3001/meals/')
      setMeal(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const CheckSession = async () => {
    try {
      // Checks if the current token if it exists is valid
      const res = await axios.get('http://localhost:3001/user/session')
      return res.data
    } catch (error) {
      throw error
    }
  }
  

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }



  useEffect(() => {
    getMeals()
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])


  return (
    <div className="App">
        

      {/* HELLO WORKING PAGE */}
      <Routes className="Routes">
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} />} />
          <Route path="/about" element={<About />} />
          <Route path='/results/:query' element={<Results/>} />
          <Route path="/meals/:id" element={
              <MealDetails meal={meal} getMeals={getMeals} />
            }/>
        <Route path="/add/meal" element={<AddMeal getMeals={getMeals} />} />
        <Route path='/Login' element={<Login setUser={setUser} />} />
      </Routes>


    </div>
  );
}

export default App;
