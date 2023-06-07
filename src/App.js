import React from 'react';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Your from './components/your';
import Blocked from './components/blocked';

function App() {
  return (
  <Router>
  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/your" element={<Your />}/>
  <Route path="/blocked" element={<Blocked />}/>
  </Routes>
  </Router>
  );
}

export default App;
