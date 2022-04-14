/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { GetUserLogin } from '../../store/auth/selectors';
import { GetUserRegistered } from '../../store/users/selectors';

const AuthHOC: React.FC = ({ children }) => {
  const userReg = useSelector(GetUserRegistered);
  const userLogin = useSelector(GetUserLogin);

  if (userLogin) {
    return <>{children}</>;
  }

  return <Navigate to="/auth" />;
};

export default AuthHOC;
