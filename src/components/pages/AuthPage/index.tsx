import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const heandler = () => {
    if (email.length < 10 || password.length < 10) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    heandler();
  }, [email, password]);

  const submitHeandler = () => {
    console.log({ emailUser: email, password });
  };
  return (
    <PageWrapper>
      <Form title="Авторизация">
        <Input title="Email" id="email" placeholder="Введите почту" setValue={setEmail} type="text" />
        <Input title="Password" id="password" placeholder="Введите пароль" setValue={setPassword} type="text" />
        {isValid && <h3>Короткое имя или пароль</h3>}
        <Button title="Войти" onClick={submitHeandler} />
      </Form>
    </PageWrapper>
  );
};

export default AuthPage;
