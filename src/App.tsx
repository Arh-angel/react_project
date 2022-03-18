import React from 'react';

import style from './App.module.scss';

import ModalWindowContainer from './containers/ModalWindowContainer';
import Basket from './components/pages/Basket';
import BasketContainer from './containers/BasketContainer';

const App = () => (
  <div className={style.AppContainer}>
    <BasketContainer productName="productName" productDescription="productDescription" price={150} action="action" />
  </div>
);

export default App;
