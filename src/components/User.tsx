import React from "react";
import { UserDataInterface } from "../Pages/MainPage";
import "./RepoAndUser.scss";

interface UserPropsInterface {
  el: UserDataInterface;
}
const User: React.FC<UserPropsInterface> = ({ el: user }) => {
  return (
    <div className='user result'>
      <div className='image-container'>
        <img src={user.avatar_url} alt='user name photo' />
      </div>
      <div className='content-container'>
        <p className='maintitle'>{user.name}</p>
        <p className='subtitle'>{user.title}</p>
        <p className='uses-description'>{user.description}</p>
        <p className='user-city'>{user.city}</p>
      </div>
    </div>
  );
};

export default User;
