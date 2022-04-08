/* eslint-disable no-shadow */
import React from 'react';
import Button from '../../common/Button';
import ButtonAuthReg from '../../common/Button/ButtonAuthReg';
import Form from '../../common/Form';
import Checkbox from '../../common/Form/Checkbox';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';

type RegistrationPageType = {
  handler: () => void | null;
}

const RegistrationPage = (props: RegistrationPageType) => {
  const { handler } = props;

  return (
    <Form title="Hello, world!" supTitle="Создайте аккаунт">
      <ButtonAuthReg />
      <Input id="name" placeholder="Имя" type="text" value={undefined} />
      <Input id="lastName" placeholder="Фамилия" type="text" value={undefined} />
      <Input id="email" placeholder="Email" type="text" value={undefined} />
      <PasswordInput id="password" placeholder="Пароль" type="password" value={undefined} />
      <PasswordInput id="password" placeholder="Повторите пароль" type="password" value={undefined} />
      <Checkbox />
      <Button title="Создать аккаунт" handler={handler} width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} />
    </Form>
  );
};

export default RegistrationPage;
