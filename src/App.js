import React from "react";
import NavBar from "./Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Blog from "./Blog/userblogs";
import Guide from "./Pages/Guide/guide"
import Security from "./Pages/Security/security";
import Maintenance from "./Pages/Maintenance/maintenance";
import Blogpage from "./Pages/blogpage";
import Personal from "./Pages/Personal/personal";


function App() {
  return (
          <Router>
            <NavBar />
              <Routes>
                  <Route exact path='/' element={<Blog/>} />
                  <Route exact path='/guide' element={<Guide/>} />
                  <Route exact path='/security' element={<Security/>} />
                  <Route exact path='/maintenance' element={<Maintenance/>} />
                  <Route exact path='/personal' element={<Personal/>} />
                  <Route path='/blogs/:id' element={<Blogpage/>} />
              </Routes>
          </Router>

  );
}

export default App;
