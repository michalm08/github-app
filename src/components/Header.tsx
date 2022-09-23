import React from 'react';
import { Outlet } from 'react-router-dom';
import './Header.scss';
//@ts-ignore
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <div className='header'>
          <img src={logo} alt='photo' />
          <input className='header__search' type='text' placeholder='Search' />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
