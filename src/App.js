import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import { useState, useEffect } from 'react'
import About from './pages/about/About'
import MealDetails from './pages/mealDetails/MealDetails'
import AddMeal from './pages/addMeal/AddMeal'
import Results from './pages/results/Results'
import Login from './pages/login/Login'
import Favorites from './pages/favorites/Favorites';
import UserDash from './pages/UserDash/UserDash';
import Client from './services/api'
import EditMeal from './pages/editMeal/EditMeal'

function App() {

  const [user, setUser] = useState(null)

  const [meal, setMeal] = useState([])
  const getMeals = async () => {
    try {
      const res = await Client.get('/meals')
      setMeal(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const CheckSession = async () => {
    try {
      const res = await Client.get('/user/session')
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
          <Route path="/about" element={<About user={user} setUser={setUser} />} />
          <Route path='/results/:query' element={<Results user={user} setUser={setUser} />} />
          <Route path="/meals/:id" element={
              <MealDetails meal={meal} getMeals={getMeals} user={user} setUser={setUser} />
            }/>
        <Route path="/add/meal" element={<AddMeal user={user} getMeals={getMeals} setUser={setUser} />} />
        <Route path='/Login' element={<Login setUser={setUser} />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/auth' element={<UserDash user={user} setUser={setUser}/>}></Route>
        <Route path='/edit' element={<EditMeal user={user} setUser={setUser}/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
