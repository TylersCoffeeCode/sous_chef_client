import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header>
        {/* <Nav /> */}
      </header>

      {/* HELLO WORKING PAGE */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>


    </div>
  );
}

export default App;
