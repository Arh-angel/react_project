import React from 'react';
import styled from 'styled-components';
import style from './MainPage.module.scss';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import PageWrapper from '../../common/PageWrapper';

const DescriptionWrapper = styled('div')`
  color: aqua;
  font-size: 16px;
`;

const MainPage = () => (
  <PageWrapper>
    <main className={style.main}>
      <h2>Main contant</h2>
      <DescriptionWrapper>
        <p>Параграф</p>
      </DescriptionWrapper>
    </main>
  </PageWrapper>
);

export default MainPage;
