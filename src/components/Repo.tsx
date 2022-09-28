import React from "react";
import "./RepoAndUser.scss";
import { RepoDataInterface } from "../Pages/MainPage";
/* @ts-ignore */
import star from "../assets/star.svg";
/* @ts-ignore */
import repoIcon from "../assets/repo.svg";

interface RepoPropsInterface {
  el: RepoDataInterface;
}

const Repo: React.FC<RepoPropsInterface> = ({ el: repo }) => {
  return (
    <div className='repo result'>
      <div className='image-container'>
        <img src={repoIcon} alt='user name photo' />
      </div>
      <div className='content-container'>
        <div className='maintitle'>{repo.full_name}</div>
        <div className='subtitle'>{repo.description}</div>
        <div className='low-section'>
          <div className='low-section__element low-section__star'>
            <img src={star} alt='star' />
            <p>{repo.stargazers_count}</p>
          </div>
          {repo.language && (
            <div className='low-section__element low-section__language'>
              <div className='stamp' />
              <p>{repo.language}</p>
            </div>
          )}
          {repo.license && (
            <div className='low-section__element low-section__license'>
              <p>{repo.license}</p>
            </div>
          )}

          <p className='low-section__element'>{repo.updated_at}</p>
        </div>
      </div>
    </div>
  );
};

export default Repo;
