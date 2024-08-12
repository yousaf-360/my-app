import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

export default function App() {
  const token = localStorage.getItem('AuthToken');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/home'
          element={token ? <Home /> : <Navigate to='/' />}
        />
      </Routes>
    </BrowserRouter>
  );
}
