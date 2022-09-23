import React from 'react';
import { Outlet } from 'react-router-dom';
import './Header.scss'

const Header = () => {
  return (
    <>
      <div className='header'>Header</div>
      <Outlet />
    </>
  );
};

export default Header;
