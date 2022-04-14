import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthErrorAction, SetAuthEmailAction } from '../../../../store/auth/actions';
import { GetUserLogin } from '../../../../store/auth/selectors';
import { SetUserAgeAction, SetUserEmailAction, SetUserLastNameAction, SetUserNameAction } from '../../../../store/users/actions';
import { GetUserEmail, GetUserRegistered } from '../../../../store/users/selectors';
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

  const userRegistered = useSelector(GetUserRegistered);
  const userLogin = useSelector(GetUserLogin);
  const userEmail = useSelector(GetUserEmail);

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
    if (!userLogin) {
      if (id === 'name') {
        if (currentValue === userEmail) {
          dispatch(AuthErrorAction(false));
          dispatch(SetAuthEmailAction(currentValue));
        }
      }
    }
  }, [currentValue]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type={type} />
      <span>{placeholder}</span>
    </label>
  );
};

export default Input;
