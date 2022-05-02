import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ButtonAuthReg.module.scss';

const ButtonAuthReg = () => {
  console.log('Кнопка регистрации и авторизации');
  return (
    <div className={style.wrapper}>
      <NavLink to="/reg" className={({ isActive }) => `${isActive ? style.active : style.reg}`}>Регистрая</NavLink>
      <NavLink to="/auth" className={({ isActive }) => `${isActive ? style.active : style.auth}`}>Авторизация</NavLink>
    </div>
  );
};

export default ButtonAuthReg;
