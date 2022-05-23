import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/pages/AuthPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { selectAuthorizationErrorStatus, selectUserAuthorized, userAuthorized } from '../../store/slice/userSlice/userSlice';

const AuthContainer = () => {
  const authErrorStatus = useAppSelector(selectAuthorizationErrorStatus);
  const userAuth = useAppSelector(selectUserAuthorized);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handler = () => {
    if (!authErrorStatus) {
      dispatch(userAuthorized(true));
      navigate('/', { state: { userAuth } });
    }
  };

  return (
    <AuthPage handler={() => null} />
  );
};

export default AuthContainer;
