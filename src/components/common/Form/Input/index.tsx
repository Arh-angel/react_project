import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SetUserNameAction } from '../../../../store/UserStore/actions';
import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string;
  type: 'text' | 'password';
};

const Input = ({
  id, placeholder, type = 'text'
}: InputPropsType) => {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    dispatch(SetUserNameAction(currentValue));
  }, [currentValue]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type={type} />
      <span>{placeholder}</span>
    </label>
  );
};

export default Input;
