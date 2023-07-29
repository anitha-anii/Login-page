import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Login from './Component/Login';
import ProfilePage from './Component/ProfilePage';

function App() {
  return ( 
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
