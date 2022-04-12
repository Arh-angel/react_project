import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegistrationPage from '../../components/pages/RegistrationPage';
import { SetUserAuthAction, SetUserRegisteredAction } from '../../store/users/actions';
import { GetUserAge, GetUserEmail, GetUserLastName, GetUserName, GetUserPassword, GetUserRegistered } from '../../store/users/selectors';

const RegistrationContainer = () => {
  const userName = useSelector(GetUserName);
  const userLastName = useSelector(GetUserLastName);
  const userEmail = useSelector(GetUserEmail);
  const userPassword = useSelector(GetUserPassword);
  const userRegistered = useSelector(GetUserRegistered);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setUserRegistered = () => {
    if (userName && userLastName && userEmail && userPassword) {
      dispatch(SetUserRegisteredAction(true));
      dispatch(SetUserAuthAction(true));
      navigate('/', { state: { userRegistered } });
    }
  };

  return (
    <RegistrationPage handler={setUserRegistered} />
  );
};

export default RegistrationContainer;
