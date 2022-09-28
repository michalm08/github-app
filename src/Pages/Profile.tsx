import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../services";
import "./Profile.scss";
// @ts-ignore
import star from "../assets/star.svg";
interface ProfileDataInterface {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  following: number;
  public_gists: number;
}

const Profile = () => {
  let { login } = useParams();
  const [profileData, setProfileData] = useState<ProfileDataInterface>();
  const [didNotFoundProfile, setDidNotFoundProfile] = useState<boolean>(false);
  useEffect(() => {
    getUserData(login).then((user) => {

      setProfileData({
        avatar_url: user.data.avatar_url,
        name: user.data.name,
        login: user.data.login,
        followers: user.data.followers,
        following: user.data.following,
        public_gists: user.data.public_gists,
      });
    }).catch(err=>setDidNotFoundProfile(true));
  },[]);

  return (
    <>
      {!!profileData && !didNotFoundProfile && (
        <div className='profile'>
          <img
            src={profileData.avatar_url}
            alt={profileData.login}
            className='profile__avatar'
          />
          <h1 className='profile__name'>{profileData.name}</h1>
          <h2 className='profile__login'>{profileData.login}</h2>
          <div className='bottom-container'>
            <div className='bottom-container__followers'>
              <img src={star} />
              {profileData.followers} Followers
            </div>
            <div className='bottom-container__following'>
              {profileData.following} Following
            </div>
            <div className='bottom-container__stars'>
              <img src={star} />
              {profileData.public_gists}
            </div>
          </div>
        </div>
      )}
      {didNotFoundProfile&&(<p>did not found profile :/</p>)}
    </>
  );
};

export default Profile;
