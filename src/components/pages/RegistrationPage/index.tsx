/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/PasswordInput';
import PageWrapper from '../../common/PageWrapper';

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [copyPassword, setCopyPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const heandler = () => {
    if (firstName.length < 6 || email.length < 6 || password.length < 6) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(heandler, [email, password]);

  const submitHeandler = () => {
    if (isValid) {
      console.log('Не корректно введенные данные');
    } else {
      console.log({ firstNameUser: firstName, emailUser: email, passwordUser: password });
    }
  };

  const checkLength = () => {
    const needLength:number = 6;
    if (firstName.length < needLength && firstName.length !== 0) {
      return (
        <p>
          {`Нужно не меньше ${needLength} символов в поле Name`}
        </p>
      );
    }
    if (email.length < needLength && email.length !== 0) {
      return (
        <p>
          {`Нужно не меньше ${needLength} символов в поле Email`}
        </p>
      );
    }
    if (password.length < needLength && password.length !== 0) {
      return (
        <p>
          {`Нужно не меньше ${needLength} символов в поле Password`}
        </p>
      );
    }
    return console.log('Все отлично!');
  };

  const checkPassword = () => {
    if (password !== copyPassword && copyPassword !== '') {
      return (
        <p>
          Пароли не совпадают!!!
        </p>
      );
    }
    return console.log('Все отлично!');
  };

  return (
    <PageWrapper>
      <Form title="Регистрация">
        <Input title="Name" id="name" placeholder="Введите имя" type="text" setValue={setFirstName} />
        <Input title="Email" id="email" placeholder="Введите почту" type="text" setValue={setEmail} />
        <PasswordInput title="Password" id="password" placeholder="Введите пароль" type="text" setValue={setPassword} />
        <PasswordInput title="Repeat Password" id="repeatPassword" placeholder="Повторите пароль" type="text" setValue={setCopyPassword} />
        {isValid && checkLength()}
        {isValid && checkPassword()}
        <Button title="Регистрация" onClick={submitHeandler} />
      </Form>
    </PageWrapper>
  );
};

export default RegistrationPage;
