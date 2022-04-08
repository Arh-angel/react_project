import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/pages/AuthPage';
import { SetUserAuthAction } from '../../store/UserStore/actions';
import { GetRegAuthError, GetUserAuth, GetUserEmail, GetUserPassword } from '../../store/UserStore/selectors';

const AuthContainer = () => {
  const userEmail = useSelector(GetUserEmail);
  const userPassword = useSelector(GetUserPassword);
  const userAuth = useSelector(GetUserAuth);
  const regAuthError = useSelector(GetRegAuthError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log('здесь');

  const handler = () => {
    if (!regAuthError) {
      dispatch(SetUserAuthAction(true));
      navigate('/', { state: { userAuth } });
    }
  };

  return (
    <AuthPage handler={handler} />
  );
};

export default AuthContainer;
