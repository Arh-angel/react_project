/* eslint-disable react/jsx-indent */
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from './Header.module.scss';

import Button from '../Button';
import SearchInput from '../Form/Input/SearchInput';
import Burger from '../Burger';
import DropDownMenu from '../DropDownMenu';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';
import { selectAuthorizationErrorStatus, selectUserAuthorized, selectUserRegistered, userAuthorized } from '../../../store/slice/userSlice/userSlice';

const Header = () => {
  const [admin, setAdmin] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [logInLogOut, setLogInLogOut] = useState(false);
  const [path, setPath] = useState('');

  const userAuth = useAppSelector(selectUserAuthorized);
  const userReg = useAppSelector(selectUserRegistered);
  const authError = useAppSelector(selectAuthorizationErrorStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userAuth) {
      setLogInLogOut(true);
      setPath('/auth');
    } else {
      setLogInLogOut(false);
      setPath('/');
    }
  }, [userAuth]);

  const searchResults = () => {
    navigate('/searchResults');
  };

  const handler = () => {
    if (userAuth) {
      dispatch(userAuthorized(false));
    } else {
      dispatch(userAuthorized(true));
    }
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.mobileBurger}>
          <Burger />
        </div>
        <Link to="/" className={style.logo}>
          <svg width="103" height="20" viewBox="0 0 103 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5858 8.36396C10.8047 9.14501 10.8047 10.4113 11.5858 11.1924L15.4749 15.0815L11.1924 19.364C10.4113 20.145 9.14501 20.145 8.36396 19.364L0.585786 11.5858C-0.195262 10.8047 -0.195262 9.53841 0.585786 8.75736L8.36396 0.979185C9.14501 0.198136 10.4113 0.198136 11.1924 0.979185L15.0815 4.86827L11.5858 8.36396ZM15.0815 4.86827L19.364 0.585786C20.145 -0.195262 21.4113 -0.195262 22.1924 0.585786L29.9706 8.36396C30.7516 9.14501 30.7516 10.4113 29.9706 11.1924L22.1924 18.9706C21.4113 19.7516 20.145 19.7516 19.364 18.9706L15.4749 15.0815L18.9706 11.5858C19.7516 10.8047 19.7516 9.53841 18.9706 8.75736L15.0815 4.86827Z" fill="url(#paint0_linear_3806_1873)" />
            <path d="M41.2764 16.16C40.1457 16.16 39.1217 15.9147 38.2044 15.424C37.2977 14.9227 36.5831 14.2347 36.0604 13.36C35.5484 12.4853 35.2924 11.4987 35.2924 10.4C35.2924 9.30133 35.5537 8.31467 36.0764 7.44C36.5991 6.56533 37.3137 5.88267 38.2204 5.392C39.1377 4.89067 40.1617 4.64 41.2924 4.64C42.2097 4.64 43.0471 4.8 43.8044 5.12C44.5617 5.44 45.2017 5.904 45.7244 6.512L44.3804 7.776C43.5697 6.90133 42.5724 6.464 41.3884 6.464C40.6204 6.464 39.9324 6.63467 39.3244 6.976C38.7164 7.30667 38.2417 7.77067 37.9004 8.368C37.5591 8.96533 37.3884 9.64267 37.3884 10.4C37.3884 11.1573 37.5591 11.8347 37.9004 12.432C38.2417 13.0293 38.7164 13.4987 39.3244 13.84C39.9324 14.1707 40.6204 14.336 41.3884 14.336C42.5724 14.336 43.5697 13.8933 44.3804 13.008L45.7244 14.288C45.2017 14.896 44.5564 15.36 43.7884 15.68C43.0311 16 42.1937 16.16 41.2764 16.16ZM55.6586 6.56H51.9466V16H49.8826V6.56H46.1866V4.8H55.6586V6.56ZM57.4685 4.8H59.5165V12.752L65.5325 4.8H67.4685V16H65.4205V8.064L59.4045 16H57.4685V4.8ZM74.7368 11.28H72.6568V16H70.6088V4.8H72.6568V9.488H74.8008L78.0168 4.8H80.2248L76.4008 10.224L80.3688 16H78.0168L74.7368 11.28ZM90.1806 14.256V16H81.7806V4.8H89.9566V6.544H83.8606V9.456H89.2686V11.168H83.8606V14.256H90.1806ZM97.1074 4.8C98.0781 4.8 98.9207 4.96 99.6354 5.28C100.361 5.6 100.915 6.05867 101.299 6.656C101.683 7.25333 101.875 7.96267 101.875 8.784C101.875 9.59467 101.683 10.304 101.299 10.912C100.915 11.5093 100.361 11.968 99.6354 12.288C98.9207 12.608 98.0781 12.768 97.1074 12.768H94.5794V16H92.4994V4.8H97.1074ZM97.0114 11.008C97.9181 11.008 98.6061 10.816 99.0754 10.432C99.5447 10.048 99.7794 9.49867 99.7794 8.784C99.7794 8.06933 99.5447 7.52 99.0754 7.136C98.6061 6.752 97.9181 6.56 97.0114 6.56H94.5794V11.008H97.0114Z" fill="#424242" />
            <defs>
              <linearGradient id="paint0_linear_3806_1873" x1="5.67172" y1="5.77832" x2="13.1717" y2="13.7783" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFAC28" />
                <stop offset="1" stopColor="#FFC328" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
        {!admin ? <div className={style.searchProductInput}>
          <SearchInput
            id="search"
            placeholder={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
                      }
            type="text" />
          <Button title="Искать" handler={searchResults} width="96px" height="36px" background={null} textColor={null} fontSize={null} fontWeight={null} margin={null} borderRadius="0 4px 4px 0" icon={null} />
                  </div> : ''}
        <div className={style.wrapperBtnAccaunt}>
          {!admin ? <Link to="/searchresults" className={style.submitAdvertisement}><Button title="Подать обьявление" handler={() => { }} width="calc(170px + (180 - 170) * ((100vw - 768px) / (1920 - 768)))" height="36px" background="#FFAC28" textColor="#1D1D1D" fontSize={null} fontWeight={null} margin={null} borderRadius={null} icon={null} /></Link> : '' }
          <div className={style.profileContainer}>
            <Link className={style.authLink} onClick={handler} to={path}>{logInLogOut ? <DropDownMenu /> : 'Войти'}</Link>
          </div>
          <div className={style.lockBurger}>
            <Link to="/basket" className={style.lock}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="15" x2="12" y2="18" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </Link>
            <Burger />
          </div>
          <div className={style.mobileLockSearch}>
            <Link to="/lock">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="15" x2="12" y2="18" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </Link>
            <Link to="/search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
