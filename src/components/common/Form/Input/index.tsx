import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetRegAuthErrorAction, SetUserAgeAction, SetUserEmailAction, SetUserLastNameAction, SetUserNameAction } from '../../../../store/UserStore/actions';
import { GetRegAuthError, GetUserAuth, GetUserEmail, GetUserRegistered } from '../../../../store/UserStore/selectors';
import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined,
  type: 'text' | 'password';
};

const Input = ({
  id, placeholder, value, type = 'text'
}: InputPropsType) => {
  const [currentValue, setCurrentValue] = useState('');
  const userRegistered = useSelector(GetUserRegistered);
  const userAuth = useSelector(GetUserAuth);
  const userEmail = useSelector(GetUserEmail);
  const regAuthError = useSelector(GetRegAuthError);
  const dispatch = useDispatch();

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if (!userRegistered) {
      if (id === 'name') {
        dispatch(SetUserNameAction(currentValue));
      } else if (id === 'lastName') {
        dispatch(SetUserLastNameAction(currentValue));
      } else if (id === 'age') {
        dispatch(SetUserAgeAction(currentValue));
      } else if (id === 'email') {
        dispatch(SetUserEmailAction(currentValue));
      }
    }
    if (!userAuth) {
      if (currentValue === userEmail) {
        dispatch(SetRegAuthErrorAction(false));
      }
    }
  }, [currentValue]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} value={value} type={type} />
      <span>{placeholder}</span>
    </label>
  );
};

export default Input;
