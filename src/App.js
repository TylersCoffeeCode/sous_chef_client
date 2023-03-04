import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <header>
        {/* <Nav /> */}
      </header>

      {/* HELLO WORKING PAGE */}

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>


    </div>
  );
}

export default App;
