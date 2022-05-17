import React from 'react';

import Banner from '../../common/Baner';
import MainMenu from '../../common/MainMenu';
import ProductList from '../../common/ProductList';

const MainPage = () => {
  console.log('mainPage');

  return (
    <>
      <Banner />
      <MainMenu />
      <ProductList />
    </>
  );
};

export default MainPage;
