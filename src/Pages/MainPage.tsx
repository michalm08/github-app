import React, { useEffect, useRef, useState } from 'react';

import { getReposData, getUsersData } from '../services';

import './MainPage.scss';

import User from '../components/User';
import Repo from '../components/Repo';

interface UserRepoDataInterface {
  type: string;
}

export interface UserDataInterface extends UserRepoDataInterface {
  name: string;
  profile_url: string;
  title: string;
  city: string;
  avatar_url: string;
  description: string;
}

export interface RepoDataInterface extends UserRepoDataInterface {
  full_name: string;
  description: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  license: string;
}

interface MainPagePropsInterface {
  searchInput: string;
}

const shuffle = (array: any[]) => {
  let currentPosition = array.length;
  let randomPosition;

  while (currentPosition !== 0) {
    randomPosition = Math.floor(Math.random() * currentPosition);
    currentPosition--;

    let oldCurrentPosition = array[currentPosition];
    array[currentPosition] = array[randomPosition];
    array[randomPosition] = oldCurrentPosition;
  }

  return array;
};

const convertDisplayOfNumber = (number: number) => {
  let numberAsStringToReturn = '';
  const numberAsString = number.toString();

  for (let i = 0; i < numberAsString.length; i++) {
    numberAsStringToReturn += numberAsString[i];
    if (
      (numberAsString.length - i - 1) % 3 === 0 &&
      i + 1 !== numberAsString.length
    ) {
      numberAsStringToReturn += ',';
    }
  }
  return numberAsStringToReturn;
};
const MainPage: React.FC<MainPagePropsInterface> = ({ searchInput }) => {
  const [datas, setDatas] = useState<UserDataInterface[] | RepoDataInterface[]>(
    []
  );

  const [numberOfResults, setNumberOfResults] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoadFailed, setIsLoadFailed] = useState<boolean>(false);

  useEffect(() => {
    takeData('');
  }, []);

  useEffect(() => {
    //debounce effect
    const delayDebounceFn = setTimeout(() => {
      takeData(searchInput);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  const takeData = async (query: string) => {
    if (loading) {
      return;
    }
    setLoading(true);
    let datasArray: (UserDataInterface | RepoDataInterface)[] = [];

    getUsersData(query)
      .then((userResponse) => {
        userResponse.data.items.forEach((user) => {
          datasArray.push({
            type: 'user',
            name: user.login,
            profile_url: user.url,
            title: 'Nice guy',
            city: 'London, England',
            description: 'Just a guy who likes to make things @MichalYouDoing',
            avatar_url: user.avatar_url,
          });
        });
        getReposData(query)
          .then((repoResponse) => {
            repoResponse.data.items.forEach((repo) =>
              datasArray.push({
                type: 'repo',
                full_name: repo.full_name,
                description: repo.description || '',
                stargazers_count: repo.stargazers_count,
                language: repo.language || '',
                updated_at: repo.updated_at,
                license: repo.license ? repo.license.name : '',
              })
            );
            setNumberOfResults(
              userResponse.data.total_count + repoResponse.data.total_count
            );
            setDatas(shuffle(datasArray));
            // setLoaded(true);
            setLoading(false);
          })
          .catch(loadFailed);
      })
      .catch(loadFailed);
  };

  const loadFailed = () => {
    setLoading(false);
    setIsLoadFailed(true);
  };

  return (
    <>
      {loading && (
        <div className='loader-container'>
          <div className='loader' />
        </div>
      )}
      {isLoadFailed && (
        <p>
          load failed...
        </p>
      )}
      <div className='main-page-container'>
        <div className='main-page'>
          {!!numberOfResults && (
            <div className='number'>
              {convertDisplayOfNumber(numberOfResults)} results
            </div>
          )}
          <div className='results'>
            {datas.map((el, index) => (
              <div key={index}>
                {el.type === 'user' ? (
                  <User el={el as UserDataInterface} />
                ) : (
                  <Repo el={el as RepoDataInterface} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
