/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import React, {
  ChangeEvent, useEffect, useRef, useState
} from 'react';
import HideButton from '../../Button/HideButton';
import ShowButton from '../../Button/ShowButton';
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

  const currentInput:any = useRef(null);

  const heandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target.value);
    setValue(event.target.value);
  };

  useEffect(() => {
    if (isVisible === false) {
      currentInput.current.type = 'password';
    } else {
      currentInput.current.type = 'text';
    }
  }, [isVisible]);

  const heandlerButton = () => {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

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
        <input ref={currentInput} id={id} placeholder={placeholder} type={type} onChange={heandler} onBlur={heandlerStyle} />
        <button type="button" onClick={heandlerButton}>
          {(isVisible && <ShowButton />) || <HideButton />}
        </button>
      </div>
    </label>
  );
};

export default PasswordInput;
