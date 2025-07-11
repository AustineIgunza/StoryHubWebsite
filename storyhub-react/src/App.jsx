import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/landing';
import Signup from './components/signup';
import Community from './components/community';
import WriteUp from './components/writeup';
import Browse from './components/browse';
import Login from './components/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/community" element={<Community />} />
      <Route path="/writeup" element={<WriteUp />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
}

export default App;