import React, { Dispatch, SetStateAction } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
/* @ts-ignore */
import logo from "../assets/logo.png";

interface HeaderPropsInterface {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}
const Header: React.FC<HeaderPropsInterface> = ({
  searchInput,
  setSearchInput,
}) => {

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
