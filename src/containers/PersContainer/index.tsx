import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pers from '../../components/pages/Pers';
import { GetUsersAction } from '../../store/users/actions';
import { GetUsers } from '../../store/users/selectors';

const PersContainer = () => {
  const { name } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);

  const usersData = useSelector(GetUsers);

  const user = usersData.find((el) => el.name === name);

  return <Pers userInfo={user} />;
};

export default PersContainer;
