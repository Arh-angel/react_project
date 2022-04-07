import React from 'react';
import Button from '../../common/Button';
import ButtonAuthReg from '../../common/Button/ButtonAuthReg';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';
import PasswordRecoveryLink from '../../common/LInks/PasswordRecoveryLink';

const AuthPage = () => {
  const log = console.log('text');
  return (
    <Form title="Hello, world!" supTitle="Пройдите авторизацию">
      <ButtonAuthReg />
      <Input id="email" placeholder="Email" type="text" />
      <PasswordInput id="password" placeholder="Пароль" type="password" />
      <PasswordRecoveryLink title="Забыли пароль?" />
      <Button title="Войти" width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} />
    </Form>
  );
};

export default AuthPage;
