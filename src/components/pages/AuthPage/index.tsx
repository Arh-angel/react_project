import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GetUserEmail, GetUserPassword } from '../../../store/users/selectors';
import Button from '../../common/Button';
import ButtonAuthReg from '../../common/Button/ButtonAuthReg';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';
import PasswordRecoveryLink from '../../common/LInks/PasswordRecoveryLink';

type AuthPageType = {
  handler: () => void | null
}

const AuthPage = (props: AuthPageType) => {
  const { handler } = props;

  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const userEmail = useSelector(GetUserEmail);
  const userPassword = useSelector(GetUserPassword);

  return (
    <Form title="Hello, world!" supTitle="Пройдите авторизацию">
      <ButtonAuthReg />
      <Input id="email" placeholder="Email" value={userEmail} type="text" />
      <PasswordInput id="password" placeholder="Пароль" value={userPassword} type="password" />
      <PasswordRecoveryLink title="Забыли пароль?" />
      <Button title="Войти" handler={handler} width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} />
    </Form>
  );
};

export default AuthPage;
