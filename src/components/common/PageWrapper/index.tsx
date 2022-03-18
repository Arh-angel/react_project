import React from 'react';
import style from './PageWrapper.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const PageWrapper: React.FC = ({ children }) => (
  <div className={style.pageContainer}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default PageWrapper;
