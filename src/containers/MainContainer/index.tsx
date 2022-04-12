import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MainPage from '../../components/pages/MainPage';
import makeRequest from '../../network';
import { GetUsersAction } from '../../store/users/actions';

const MainContainer = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);

  return (
    <MainPage />
  );
};

export default MainContainer;
