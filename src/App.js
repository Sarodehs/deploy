import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./compound/Profile";
function App() {
  return (
    <>
     <Router>
      <Routes>
      <Route path='/' element={<Profile />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
