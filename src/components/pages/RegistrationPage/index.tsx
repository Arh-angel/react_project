/* eslint-disable no-shadow */
import React from 'react';
import Button from '../../common/Button';
import ButtonAuthReg from '../../common/Button/ButtonAuthReg';
import Form from '../../common/Form';
import Checkbox from '../../common/Form/Checkbox';
import Input from '../../common/Form/Input';

const RegistrationPage = () => {
  const log = console.log('text');
  return (
    <Form title="Hello, world!" supTitle="Создайте аккаунт">
      <ButtonAuthReg />
      <Input id="name" placeholder="Имя" type="text" />
      <Input id="lastName" placeholder="Фамилия" type="text" />
      <Input id="email" placeholder="Email" type="text" />
      <Input id="password" placeholder="Пароль" type="password" />
      <Input id="password" placeholder="Повторите пароль" type="password" />
      <Checkbox />
      <Button title="Создать аккаунт" width="100%" height="48px" background={null} textColor={null} fontSize={null} fontWeight={null} margin="24px 0 0 0" borderRadius={null} />
    </Form>
  );
};

export default RegistrationPage;
