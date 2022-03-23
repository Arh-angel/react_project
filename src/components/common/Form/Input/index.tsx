/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>,
  type: 'text' | 'passwort'
};

const Input = ({
  title, id, placeholder, setValue, type
}: InputPropsType) => {
  const heandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const heandlerStyle = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value.length);
    if (event.target.value.length < 6 && event.target.value.length > 0) {
      event.target.style.border = '3px solid red';
    } else {
      event.target.style.border = '';
    }
  };

  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{ title }</span>
      <input id={id} placeholder={placeholder} type={type} onChange={heandler} onBlur={heandlerStyle} />
    </label>
  );
};

export default Input;
