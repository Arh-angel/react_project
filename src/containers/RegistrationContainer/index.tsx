import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegistrationPage from '../../components/pages/RegistrationPage';
import { UserLoginAction } from '../../store/auth/actions';
import { SetUserRegisteredAction } from '../../store/users/actions';
import { GetUserEmail, GetUserLastName, GetUserName, GetUserPassword, GetUserRegistered } from '../../store/users/selectors';

const RegistrationContainer = () => {
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const [pasMatch, setPasMatch] = useState(false);

  const userName = useSelector(GetUserName);
  const userLastName = useSelector(GetUserLastName);
  const userEmail = useSelector(GetUserEmail);
  const userPassword = useSelector(GetUserPassword);
  const userRegistered = useSelector(GetUserRegistered);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const trackPas = (value:string) => {
    setPass(value);
  };

  const trackRepeatPas = (value:string) => {
    setRepeatPass(value);
  };

  useEffect(() => {
    if (pass.length > 0 && repeatPass.length > 0) {
      if (pass === repeatPass) {
        setPasMatch(true);
      } else {
        setPasMatch(false);
      }
    } else {
      setPasMatch(true);
    }
  }, [pass, repeatPass]);

  const setUserRegistered = () => {
    if (userName && userLastName && userEmail && userPassword) {
      dispatch(SetUserRegisteredAction(true));
      dispatch(UserLoginAction());
      navigate('/', { state: { userRegistered } });
    }
  };

  return (
    // eslint-disable-next-line max-len
    <RegistrationPage handler={setUserRegistered} trackPas={trackPas} trackRepeatPas={trackRepeatPas} pasMatch={pasMatch} />
  );
};

export default RegistrationContainer;
