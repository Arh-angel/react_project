import React, { useEffect, useState } from 'react';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';

const AuthPage = () => {
  const log = console.log('text');
  return (
    <Form title="Hello, world!" supTitle="Пройдите авторизацию">
      <Input id="email" placeholder="Email" type="text" />
      <Input id="password" placeholder="Пароль" type="password" />
    </Form>
  );
};

export default AuthPage;
