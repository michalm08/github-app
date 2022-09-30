import React, { Dispatch, SetStateAction } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Header.scss';
/* @ts-ignore */
import logo from '../assets/logo.png';
import { useEffect } from 'react';
import { useState } from 'react';

interface HeaderPropsInterface {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}
const Header: React.FC<HeaderPropsInterface> = ({
  searchInput,
  setSearchInput,
}) => {

  const [inputEnable, setInputEnable] = useState<boolean>(true);
  const location = useLocation();
  useEffect(() => {

    if (location.pathname === '/') {
      setInputEnable(true);
    } else {
      setInputEnable(false);
    }
  });

  return (
    <>
      <div className='header-container'>
        <div className='header'>
          <Link to={`/`} className='maintitle'>
            <img src={logo} alt='photo' />
          </Link>
          <input
            className='header__search'
            type='text'
            placeholder={inputEnable ? 'Search' : 'Search disabled...'}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            disabled={!inputEnable}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
