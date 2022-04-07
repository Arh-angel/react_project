import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegistrationPage from '../../components/pages/RegistrationPage';
import { GetUserName } from '../../store/UserStore/selectors';

const RegistrationContainer = () => {
  const userName = useSelector(GetUserName);
  const navigate = useNavigate();

  // navigate('/', { state: { ? } });

  return (
    <RegistrationPage />
  );
};

export default RegistrationContainer;
