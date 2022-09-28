import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Lost from './Pages/Lost';
import MainPage from './Pages/MainPage';
import Profile from './Pages/Profile';

function App() {
  const [searchInput, setSearchInput] = useState("")

  
  return (
    <Routes>
      <Route path='/' element={<Header searchInput={searchInput} setSearchInput={setSearchInput} />}>
        <Route index element={<MainPage searchInput={searchInput}/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:login' element={<Profile />} />
        <Route path='*' element={<Lost />} />
      </Route>
    </Routes>
  );
}

export default App;
