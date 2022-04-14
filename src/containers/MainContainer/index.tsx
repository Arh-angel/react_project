import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from '../../components/pages/MainPage';
import { GetUsersAction } from '../../store/users/actions';
import { GetUsers } from '../../store/users/selectors';

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);

  const userData = useSelector(GetUsers);

  return (
    <MainPage data={userData} />
  );
};

export default MainContainer;
