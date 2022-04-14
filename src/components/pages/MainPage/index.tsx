import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './MainPage.module.scss';

type MainPageType = {
  data: { id: number; name: string; species: string; url: string; image: string }[]
}

const MainPage = (props:MainPageType) => {
  const { data } = props;
  console.log(data);
  return (
    <ul className={style.list}>
      {data.map((el) => {
        console.log(el.name);
        return (
          <li key={el.id}>
            <Link to={el.name}>
              <img src={el.image} alt="" />
              <p>{el.name}</p>
              <p>{el.species}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainPage;
