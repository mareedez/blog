import React from "react";
import NavBar from "./Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Blog from "./Blog/userblogs";
import Guide from "./Pages/Guide/guide"
import Security from "./Pages/Security/security";
import Maintenance from "./Pages/Maintenance/maintenance";


function App() {
  return (
          <Router>
            <NavBar />
              <Routes>
                  <Route exact path='/' element={<Blog/>} />
                  <Route exact path='/guide' element={<Guide/>} />
                  <Route exact path='/security' element={<Security/>} />
                  <Route exact path='/maintenance' element={<Maintenance/>} />
              </Routes>
          </Router>

  );
}

export default App;
