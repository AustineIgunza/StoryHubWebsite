import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Signup from './components/Signup';
import Community from './components/Community';
import WriteUp from './components/WriteUp';
import Browse from './components/Browse';
import Login from './components/Login'; // ✅ Make sure this import is here

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/community" element={<Community />} />
      <Route path="/writeup" element={<WriteUp />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/login" element={<Login />} /> {/* ✅ Add this line */}
    </Routes>
  );
}

export default App;
