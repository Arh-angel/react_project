import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string;
  type: 'text' | 'password';
};

const Input = ({
  id, placeholder, type = 'text'
}: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => '1';
  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type={type} />
      <span>{placeholder}</span>
    </label>
  );
};

export default Input;
