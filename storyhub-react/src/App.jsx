import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Signup from './components/Signup';
// Add other pages when available

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      {/* You can add more routes later: */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
