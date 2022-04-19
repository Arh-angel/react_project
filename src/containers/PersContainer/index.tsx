import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Pers from '../../components/pages/Pers';
import { ClearOneUserAction, GetOneUserAction } from '../../store/users/actions';
import { GetCurrentPage, GetOneUser } from '../../store/users/selectors';

const PersContainer = () => {
  const navigate = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneUserAction(`${params.id}`));

    return () => { dispatch(ClearOneUserAction()); };
  }, [params.id]);

  const currentPage = useSelector(GetCurrentPage);
  const user = useSelector(GetOneUser);

  return <Pers userInfo={user} currentPage={currentPage} />;
};

export default PersContainer;
