import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthErrorAction, SetAuthEmailAction } from '../../../../store/auth/actions';
import { GetUserLogin } from '../../../../store/auth/selectors';
import { SetUserAgeAction, SetUserEmailAction, SetUserLastNameAction, SetUserNameAction } from '../../../../store/users/actions';
import { GetUserEmail, GetUserRegistered } from '../../../../store/users/selectors';
import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string | null;
  type: 'text' | 'password' | 'tel' | 'file';
};

const Input = ({
  id, placeholder, type = 'text'
}: InputPropsType) => {
  // eslint-disable-next-line no-useless-escape
  const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const [currentValue, setCurrentValue] = useState('');
  const [valid, setValid] = useState(true);

  const userRegistered = useSelector(GetUserRegistered);
  const userLogin = useSelector(GetUserLogin);
  const userEmail = useSelector(GetUserEmail);

  const dispatch = useDispatch();

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if (currentValue.length > 0) {
      if ((id === 'name' || id === 'lastName') && currentValue.length < 2) {
        console.log('Name');
        setValid(false);
        dispatch(AuthErrorAction(true));
      } else if (id === 'age' && +currentValue < 16 && +currentValue > 100) {
        setValid(false);
        dispatch(AuthErrorAction(true));
      } else if (id === 'email' && !currentValue.match(regEmail)) {
        console.log('Email');
        setValid(false);
        dispatch(AuthErrorAction(true));
      } else {
        console.log('EndPoint');
        setValid(true);
        dispatch(AuthErrorAction(false));
      }
    }
  }, [currentValue]);

  useEffect(() => {
    if (!userRegistered) {
      if (id === 'name' && valid) {
        dispatch(SetUserNameAction(currentValue));
      } else if (id === 'lastName' && valid) {
        dispatch(SetUserLastNameAction(currentValue));
      } else if (id === 'age' && valid) {
        dispatch(SetUserAgeAction(currentValue));
      } else if (id === 'email' && valid) {
        dispatch(SetUserEmailAction(currentValue));
      }
    }
    if (!userLogin) {
      if (id === 'email' && valid) {
        if (currentValue === userEmail) {
          dispatch(AuthErrorAction(false));
          dispatch(SetAuthEmailAction(currentValue));
        }
      }
    }
  }, [currentValue]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type={type} className={!valid ? style.notValid : ''} />
      <span>{placeholder}</span>
    </label>
  );
};

export default Input;
