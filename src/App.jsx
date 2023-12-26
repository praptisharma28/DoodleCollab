// Assuming you are using react-router-dom v6
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import Sketchbook from './pages/Sketchbook/Sketchbook';
import Whiteboard from './Whiteboard/Whiteboard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/sketchbook" element={<Sketchbook />} />
      </Routes>
     <Whiteboard/>
    </Router>
  );
}

export default App;
