import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/pages/AuthPage';
import { UserLoginAction } from '../../store/auth/actions';
import { GetAuthError, GetUserLogin } from '../../store/auth/selectors';

const AuthContainer = () => {
  const authError = useSelector(GetAuthError);
  const userLogin = useSelector(GetUserLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handler = () => {
    if (!authError) {
      dispatch(UserLoginAction());
      navigate('/', { state: { userLogin } });
    }
  };

  return (
    <AuthPage handler={handler} />
  );
};

export default AuthContainer;
