import React, { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import usePagination from '../../../hooks/usePagination';
import style from './MainPage.module.scss';

type MainPageType = {
  users: {info: {}, results: any[]}
  nextUser: () => void,
  prevUser: () => void,
}

const MainPage = (props:MainPageType) => {
  const { users, nextUser, prevUser } = props;

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 6,
    count: users.results.length,
  });

  const [search] = useSearchParams();

  return (
    <>
      {/* <div className={style.wrapper}>
        <button type="button" onClick={prevUser}>Предыдущая страничка</button>
        <button type="button" onClick={nextUser}>Следующая страничка</button>
      </div>
      <ul className={style.list}>
        {users.results.map((el) => (
          <li key={el.id}>
            <Link to={`${el.id}`} state={{ page: search.get('page')! }}>
              <img src={el.image} alt="" />
              <p>{el.name}</p>
              <p>{el.species}</p>
            </Link>
          </li>
        ))}
      </ul> */}

      <div className={style.pagination}>
        <p className={style.text}>
          {page}
          /
          {totalPages}
        </p>
        <div className={style.buttonBlock}>
          <button type="button" onClick={prevPage}>
            &larr;
          </button>
          {/* @ts-ignore */}
          {[...Array(totalPages).keys()].map((el) => (
            <button type="button" onClick={() => setPage(el + 1)} key={el}>
              {el + 1}
            </button>
          ))}
          <button type="button" onClick={nextPage}>
            &rarr;
          </button>
        </div>
      </div>
      <div className={style.list}>
        {users.results ? users.results
          .slice(firstContentIndex, lastContentIndex)
          .map((el) => (
            <li key={el.id}>
              <Link to={`${el.id}`} state={{ page: search.get('page')! }}>
                <img src={el.image} alt="" />
                <p>{el.name}</p>
                <p>{el.species}</p>
              </Link>
            </li>
          )) : <p>LOUDING</p>}
      </div>
    </>
  );
};

export default MainPage;
