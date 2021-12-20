import React from "react";
import './App.css';
import NavBar from "./Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/home";

function App() {
  return (

          <Router>
            <NavBar />
              <Routes>
                  <Route exact path='/' element={<Home/>} />
              </Routes>
          </Router>

  );
}

export default App;
