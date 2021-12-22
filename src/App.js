import React from "react";
import './App.css';
import NavBar from "./Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/home";
import Userblog from "./UserBlog/userblogs";

function App() {
  return (

          <Router>
            <NavBar />
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/personal' element={<Userblog/>} />
              </Routes>
          </Router>

  );
}

export default App;
