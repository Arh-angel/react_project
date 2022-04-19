import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Pers.module.scss';

type PersType = {
  userInfo: any,
  currentPage: string,
}

const Pers = ({ userInfo, currentPage }:PersType) => {
  console.log(currentPage);
  return userInfo?.id ? (
    <>
      <h1>USER INFO</h1>
      <img src={userInfo?.image} alt="" />
      <h2>{userInfo?.name}</h2>
      <h2>{userInfo?.species}</h2>
      <div className={style.wrapper}>
        <Link to={`/${+userInfo.id! - 1}`}>Предыдущий персонаж</Link>
        <Link to={`/?page=${currentPage || 1}`}>Назад</Link>
        <Link to={`/${+userInfo.id! + 1}`}>Следующий персонаж</Link>
      </div>
    </>
  ) : (
    <p>LOUDING</p>
  );
};

export default Pers;
