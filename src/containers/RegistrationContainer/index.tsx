import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import RegistrationPage from '../../components/pages/RegistrationPage';

import { selectUserAuthorized, selectUserEmail, selectUserFirstName, selectUserLastName, selectUserPassword, selectUserRegistered, userAuthorized, userRegistered } from '../../store/slice/userSlice/userSlice';

const RegistrationContainer = () => {
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const [pasMatch, setPasMatch] = useState(false);

  const userName = useAppSelector(selectUserFirstName);
  const userLastName = useAppSelector(selectUserLastName);
  const userEmail = useAppSelector(selectUserEmail);
  const userPassword = useAppSelector(selectUserPassword);
  const userReg = useAppSelector(selectUserRegistered);
  const userAuth = useAppSelector(selectUserAuthorized);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(pass, repeatPass, pasMatch);

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
      dispatch(userRegistered(true));
      dispatch(userAuthorized(true));
      navigate('/', { state: { userReg } });
    }
  };

  return (
    // eslint-disable-next-line max-len
    <RegistrationPage handler={setUserRegistered} trackPas={trackPas} trackRepeatPas={trackRepeatPas} pasMatch={pasMatch} />
  );
};

export default RegistrationContainer;
