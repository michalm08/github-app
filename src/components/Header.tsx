import React, { Dispatch, SetStateAction } from "react";
import { Outlet } from "react-router-dom";
import "./Header.scss";
/* @ts-ignore */
import logo from "../assets/logo.png";

interface HeaderPropsInterface{
  searchInput:string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}
const Header: React.FC<HeaderPropsInterface> = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <div className='header-container'>
        <div className='header'>
          <img src={logo} alt='photo' />
          <input
            className='header__search'
            type='text'
            placeholder='Search'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
