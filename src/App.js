import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './pages/Home/HomePage';
import LayOut from './LayOut';

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
