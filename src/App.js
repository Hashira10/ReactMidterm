import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
  return (
    <div id="app">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;