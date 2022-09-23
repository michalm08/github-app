import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Lost from './Pages/Lost';
import MainPage from './Pages/MainPage';
import Profile from './Pages/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Lost />} />
      </Route>
    </Routes>
  );
}

export default App;
