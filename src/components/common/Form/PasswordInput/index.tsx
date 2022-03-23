/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './PasswordInput.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>,
  type: 'text' | 'passwort'
};

const PasswordInput = ({
  title, id, placeholder, setValue, type
}: InputPropsType) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [plug, setPlug] = useState('');

  const heandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target.value);
    setValue(event.target.value);
  };

  useEffect(() => {
    const currentStr = document.getElementById(`${id}`);
    if (isVisible === false) {
      currentStr?.setAttribute('type', 'password');
    } else {
      currentStr?.setAttribute('type', 'text');
    }
  }, [isVisible]);

  const createButton = () => {
    if (isVisible) {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 6C5.188 6 1 12 1 12C1 12 5.188 18 12 18C18.812 18 23 12 23 12C23 12 18.812 6 12 6ZM12 16C8.057 16 5.074 13.516 3.621 12C4.661 10.915 6.483 9.343 8.875 8.531C8.3117 9.23091 8.00314 10.1016 8 11C8 12.0609 8.42143 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11C15.9969 10.1016 15.6883 9.23091 15.125 8.531C17.518 9.343 19.341 10.916 20.379 12C18.924 13.518 15.942 16 12 16V16Z"
            fill="black" />
        </svg>
      );
    }
    return (
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 9C0 9 4.188 3 11 3C11.947 3 12.839 3.121 13.678 3.322L7.36 9.64C7.12415 9.12535 7.00139 8.56611 7 8C7 7.063 7.335 6.213 7.875 5.531C5.483 6.343 3.661 7.916 2.621 9C3.50694 9.92431 4.50856 10.7303 5.601 11.398L4.148 12.851C1.497 11.13 0 9 0 9ZM22 9C22 9 17.812 15 11 15C10.054 15 9.164 14.876 8.324 14.677L4 19L2.5 17.5L19.5 0.5L21 2L17.853 5.147C20.501 6.869 22 9 22 9ZM19.385 9.006C18.4975 8.07914 17.4934 7.27139 16.398 6.603L15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12L10.053 12.947C10.363 12.978 10.677 13 11 13C14.978 13 17.943 10.522 19.385 9.006Z"
          fill="black" />
      </svg>
    );
  };

  const heandlerButton = () => {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    setPlug(() => {
      let plugStr = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < currentPassword.length; i++) {
        plugStr += '*';
      }
      return plugStr;
    });
  }, [currentPassword]);

  const heandlerStyle = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 6 && event.target.value.length > 0) {
      event.target.style.border = '3px solid red';
    } else {
      event.target.style.border = '';
    }
  };

  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{ title }</span>
      <div className={style.container}>
        <input id={id} placeholder={placeholder} type={type} onChange={heandler} onBlur={heandlerStyle} />
        <button type="button" onClick={heandlerButton}>
          {createButton()}
        </button>
      </div>
    </label>
  );
};

export default PasswordInput;
